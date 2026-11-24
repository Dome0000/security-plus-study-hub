import { z } from 'zod';
import { EXAM_METADATA } from '../src/data/examMeta';
import { allocateByDomainWeights, scorePbq } from '../src/engine';
import {
  ExamMetadataSchema,
  FlashcardSchema,
  GlossaryEntrySchema,
  LessonSchema,
  MockExamFormSchema,
  PbqQuestionSchema,
  QuestionSchema,
  StudyPlanDaySchema,
  type Flashcard,
  type GlossaryEntry,
  type Lesson,
  type MockExamForm,
  type PbqQuestion,
  type Question,
  type StudyPlanDay
} from '../src/types';

const PLACEHOLDER_PATTERN = /\b(TODO|FIXME|TBD|lorem ipsum|coming soon|placeholder)\b/i;

function assertNoPlaceholders(label: string, data: unknown, errors: string[]): void {
  const serialized = JSON.stringify(data);
  const match = serialized.match(PLACEHOLDER_PATTERN);
  if (match) {
    errors.push(`${label}: detected forbidden placeholder token "${match[0]}"`);
  }
}

function validateUniqueIds(label: string, ids: string[], errors: string[]): Set<string> {
  const seen = new Set<string>();
  for (const id of ids) {
    if (seen.has(id)) {
      errors.push(`${label}: duplicate ID "${id}"`);
    }
    seen.add(id);
  }
  return seen;
}

export interface ContentBundle {
  lessons: Lesson[];
  questions: Question[];
  pbqs: PbqQuestion[];
  mockForms: MockExamForm[];
  glossary: GlossaryEntry[];
  flashcards: Flashcard[];
  studyPlan: StudyPlanDay[];
}

export function validateBundle(bundle: ContentBundle, mode: 'fixture' | 'production'): string[] {
  const errors: string[] = [];

  // 1. Validate Exam Metadata & domain weights == 100%
  const metaCheck = ExamMetadataSchema.safeParse(EXAM_METADATA);
  if (!metaCheck.success) {
    errors.push(`EXAM_METADATA invalid: ${metaCheck.error.message}`);
  }
  const weightSum = EXAM_METADATA.domains.reduce((s, d) => s + d.weightPercent, 0);
  if (Math.abs(weightSum - 100) > 0.001) {
    errors.push(`Domain weights must sum to 100% (got ${weightSum}%)`);
  }

  const validObjectives = new Set<string>();
  const objectiveToDomain = new Map<string, string>();
  for (const d of EXAM_METADATA.domains) {
    for (const o of d.objectives) {
      validObjectives.add(o.id);
      objectiveToDomain.set(o.id, d.id);
    }
  }

  // 2. Minimum counts (enforced strictly in production mode)
  if (mode === 'production') {
    if (bundle.lessons.length < 40) {
      errors.push(`Minimum lessons required is 40 (got ${bundle.lessons.length})`);
    }
    if (bundle.questions.length < 300) {
      errors.push(`Minimum MCQ/MSQ questions required is 300 (got ${bundle.questions.length})`);
    }
    if (bundle.pbqs.length < 15) {
      errors.push(`Minimum Interactive PBQs required is 15 (got ${bundle.pbqs.length})`);
    }
    if (bundle.mockForms.length !== 3) {
      errors.push(`Expected 3 Mock Exam forms (A, B, C), got ${bundle.mockForms.length}`);
    }
    if (bundle.studyPlan.length !== 30) {
      errors.push(`Study plan must cover exactly 30 days (got ${bundle.studyPlan.length})`);
    }
    if (bundle.glossary.length < 100) {
      errors.push(`Glossary must include at least 100 terms/acronyms (got ${bundle.glossary.length})`);
    }
    if (bundle.flashcards.length < 60) {
      errors.push(`Flashcards must include at least 60 cards (got ${bundle.flashcards.length})`);
    }
  }

  // 3. Unique IDs & schema validation for Lessons
  const lessonIds = validateUniqueIds(
    'Lessons',
    bundle.lessons.map((l) => l.id),
    errors
  );

  for (const lesson of bundle.lessons) {
    const parsed = LessonSchema.safeParse(lesson);
    if (!parsed.success) {
      errors.push(`Lesson ${lesson.id} schema error: ${parsed.error.issues[0]?.message ?? 'unknown'}`);
    }
    assertNoPlaceholders(`Lesson ${lesson.id}`, lesson, errors);

    if (lesson.knowledgeChecks.length < 3) {
      errors.push(`Lesson ${lesson.id} has fewer than 3 knowledge checks`);
    }
    for (const objId of lesson.objectiveIds) {
      if (!validObjectives.has(objId)) {
        errors.push(`Lesson ${lesson.id} references unknown objective "${objId}"`);
      } else if (objectiveToDomain.get(objId) !== lesson.domainId) {
        errors.push(`Lesson ${lesson.id} domain ${lesson.domainId} mismatches objective ${objId}`);
      }
    }
    for (const relId of lesson.relatedLessonIds) {
      if (mode === 'production' && !lessonIds.has(relId)) {
        errors.push(`Lesson ${lesson.id} references missing relatedLessonId "${relId}"`);
      }
    }
  }

  // 4. Questions validation
  const questionIds = validateUniqueIds(
    'Questions',
    bundle.questions.map((q) => q.id),
    errors
  );

  const mcqFirstChoiceDistribution = new Map<string, number>();

  for (const q of bundle.questions) {
    const parsed = QuestionSchema.safeParse(q);
    if (!parsed.success) {
      errors.push(`Question ${q.id} schema error: ${parsed.error.issues[0]?.message ?? 'unknown'}`);
    }
    assertNoPlaceholders(`Question ${q.id}`, q, errors);

    for (const objId of q.objectiveIds) {
      if (!validObjectives.has(objId)) {
        errors.push(`Question ${q.id} references unknown objective "${objId}"`);
      } else if (objectiveToDomain.get(objId) !== q.domainId) {
        errors.push(`Question ${q.id} domain ${q.domainId} mismatches objective ${objId}`);
      }
    }
    for (const lid of q.relatedLessonIds) {
      if (!lessonIds.has(lid)) {
        errors.push(`Question ${q.id} references non-existent relatedLessonId "${lid}"`);
      }
    }
    if (q.type === 'mcq' && q.correctChoiceIds[0]) {
      const cid = q.correctChoiceIds[0];
      mcqFirstChoiceDistribution.set(cid, (mcqFirstChoiceDistribution.get(cid) ?? 0) + 1);
    }
  }

  // Verify answer position distribution isn't skewed (>45% on a single choice ID) in production
  if (mode === 'production') {
    const totalMcq = [...mcqFirstChoiceDistribution.values()].reduce((a, b) => a + b, 0);
    for (const [cid, count] of mcqFirstChoiceDistribution.entries()) {
      const ratio = totalMcq > 0 ? count / totalMcq : 0;
      if (ratio > 0.4) {
        errors.push(
          `MCQ correct choice position "${cid}" is over-represented (${count}/${totalMcq} = ${(ratio * 100).toFixed(1)}%)`
        );
      }
    }
  }

  // 5. PBQ validation (schema + live rubric test)
  const pbqIds = validateUniqueIds(
    'PBQs',
    bundle.pbqs.map((p) => p.id),
    errors
  );

  for (const pbq of bundle.pbqs) {
    const parsed = PbqQuestionSchema.safeParse(pbq);
    if (!parsed.success) {
      errors.push(`PBQ ${pbq.id} schema error: ${parsed.error.issues[0]?.message ?? 'unknown'}`);
    }
    assertNoPlaceholders(`PBQ ${pbq.id}`, pbq, errors);

    for (const objId of pbq.objectiveIds) {
      if (!validObjectives.has(objId)) {
        errors.push(`PBQ ${pbq.id} references unknown objective "${objId}"`);
      } else if (objectiveToDomain.get(objId) !== pbq.domainId) {
        errors.push(`PBQ ${pbq.id} domain ${pbq.domainId} mismatches objective ${objId}`);
      }
    }
    for (const lid of pbq.relatedLessonIds) {
      if (!lessonIds.has(lid)) {
        errors.push(`PBQ ${pbq.id} references non-existent relatedLessonId "${lid}"`);
      }
    }

    // Verify expected answer IDs reference real options/choices/steps
    validatePbqExpectedIds(pbq, errors);

    // Verify PBQ rubric actually evaluates to 1.0 when given expected answers
    const emptyScore = scorePbq(pbq, undefined);
    if (emptyScore.earnedPoints !== 0) {
      errors.push(`PBQ ${pbq.id} returned non-zero (${emptyScore.earnedPoints}) for empty response`);
    }
    const perfectResponse = buildPerfectPbqResponse(pbq);
    const perfectScore = scorePbq(pbq, perfectResponse);
    if (Math.abs(perfectScore.earnedPoints - 1) > 0.001) {
      errors.push(
        `PBQ ${pbq.id} rubric failed to award 1.0 for perfect answer (got ${perfectScore.earnedPoints})`
      );
    }
  }

  // 6. Objective Coverage Check (production mode requires every numbered objective covered across lessons, Qs, and mock exams)
  if (mode === 'production') {
    const lessonCoveredObj = new Set(bundle.lessons.flatMap((l) => l.objectiveIds));
    const questionObjCounts = new Map<string, number>();
    for (const q of bundle.questions) {
      for (const objId of q.objectiveIds) {
        questionObjCounts.set(objId, (questionObjCounts.get(objId) ?? 0) + 1);
      }
    }

    for (const objId of validObjectives) {
      if (!lessonCoveredObj.has(objId)) {
        errors.push(`Objective ${objId} has NO lesson coverage`);
      }
      const qCount = questionObjCounts.get(objId) ?? 0;
      if (qCount < 5) {
        errors.push(`Objective ${objId} has only ${qCount} practice questions (need >= 5)`);
      }
    }
  }

  // 7. Mock Forms validation (disjoint across A/B/C, exact 90 items & domain weights)
  const usedFormQuestions = new Set<string>();
  const usedFormPbqs = new Set<string>();
  const expectedAllocations = allocateByDomainWeights(90, EXAM_METADATA.domains);
  const expectedDomainMap = new Map(expectedAllocations.map((a) => [a.domainId, a.count]));

  const questionMap = new Map(bundle.questions.map((q) => [q.id, q]));
  const pbqMap = new Map(bundle.pbqs.map((p) => [p.id, p]));

  for (const form of bundle.mockForms) {
    const parsed = MockExamFormSchema.safeParse(form);
    if (!parsed.success) {
      errors.push(`Mock form ${form.id} schema error: ${parsed.error.issues[0]?.message ?? 'unknown'}`);
    }

    const totalItems = form.questionIds.length + form.pbqIds.length;
    if (mode === 'production' && (form.questionIds.length !== 85 || form.pbqIds.length !== 5 || totalItems !== 90)) {
      errors.push(
        `Mock form ${form.id} must have 85 questions + 5 PBQs = 90 (got ${form.questionIds.length} + ${form.pbqIds.length})`
      );
    }

    const domainCounts = new Map<string, number>();
    const formObjectives = new Set<string>();

    for (const qid of form.questionIds) {
      if (!questionIds.has(qid)) {
        errors.push(`Mock form ${form.id} references missing question "${qid}"`);
        continue;
      }
      if (usedFormQuestions.has(qid)) {
        errors.push(`Question "${qid}" is duplicated across Mock Exam forms (must be disjoint)`);
      }
      usedFormQuestions.add(qid);
      const q = questionMap.get(qid);
      if (q) {
        domainCounts.set(q.domainId, (domainCounts.get(q.domainId) ?? 0) + 1);
        for (const o of q.objectiveIds) formObjectives.add(o);
      }
    }

    for (const pid of form.pbqIds) {
      if (!pbqIds.has(pid)) {
        errors.push(`Mock form ${form.id} references missing PBQ "${pid}"`);
        continue;
      }
      if (usedFormPbqs.has(pid)) {
        errors.push(`PBQ "${pid}" is duplicated across Mock Exam forms (must be disjoint)`);
      }
      usedFormPbqs.add(pid);
      const p = pbqMap.get(pid);
      if (p) {
        domainCounts.set(p.domainId, (domainCounts.get(p.domainId) ?? 0) + 1);
        for (const o of p.objectiveIds) formObjectives.add(o);
      }
    }

    if (mode === 'production') {
      for (const [domainId, expected] of expectedDomainMap.entries()) {
        const actual = domainCounts.get(domainId) ?? 0;
        if (actual !== expected) {
          errors.push(
            `Mock form ${form.id} domain ${domainId} count mismatch: expected ${expected}, got ${actual}`
          );
        }
      }
      for (const objId of validObjectives) {
        if (!formObjectives.has(objId)) {
          errors.push(`Mock form ${form.id} does not cover objective ${objId}`);
        }
      }
    }
  }

  // 8. Glossary, Flashcards & Study Plan
  validateUniqueIds(
    'Glossary',
    bundle.glossary.map((g) => g.id),
    errors
  );
  for (const g of bundle.glossary) {
    const parsed = GlossaryEntrySchema.safeParse(g);
    if (!parsed.success) {
      errors.push(`Glossary ${g.id} schema error: ${parsed.error.issues[0]?.message ?? 'unknown'}`);
    }
    assertNoPlaceholders(`Glossary ${g.id}`, g, errors);
    for (const lid of g.relatedLessonIds) {
      if (!lessonIds.has(lid)) {
        errors.push(`Glossary ${g.id} references missing lesson "${lid}"`);
      }
    }
  }

  validateUniqueIds(
    'Flashcards',
    bundle.flashcards.map((f) => f.id),
    errors
  );
  for (const f of bundle.flashcards) {
    const parsed = FlashcardSchema.safeParse(f);
    if (!parsed.success) {
      errors.push(`Flashcard ${f.id} schema error: ${parsed.error.issues[0]?.message ?? 'unknown'}`);
    }
    assertNoPlaceholders(`Flashcard ${f.id}`, f, errors);
    for (const lid of f.relatedLessonIds) {
      if (!lessonIds.has(lid)) {
        errors.push(`Flashcard ${f.id} references missing lesson "${lid}"`);
      }
    }
  }

  const seenDays = new Set<number>();
  for (const day of bundle.studyPlan) {
    const parsed = StudyPlanDaySchema.safeParse(day);
    if (!parsed.success) {
      errors.push(`StudyPlan Day ${day.day} schema error: ${parsed.error.issues[0]?.message ?? 'unknown'}`);
    }
    if (seenDays.has(day.day)) {
      errors.push(`StudyPlan duplicate day ${day.day}`);
    }
    seenDays.add(day.day);
    assertNoPlaceholders(`StudyPlan Day ${day.day}`, day, errors);
    for (const lid of day.lessonIds) {
      if (!lessonIds.has(lid)) {
        errors.push(`StudyPlan Day ${day.day} references missing lesson "${lid}"`);
      }
    }
  }

  // Ensure study plan is strictly validated by z schema array if needed
  void z;
  return errors;
}

function validatePbqExpectedIds(pbq: PbqQuestion, errors: string[]): void {
  const cfg = pbq.config;
  switch (cfg.template) {
    case 'matching-matrix': {
      const optionIds = new Set(cfg.options.map((o) => o.id));
      for (const row of cfg.rows) {
        const expectedId = cfg.expectedMatches[row.id];
        if (!expectedId || !optionIds.has(expectedId)) {
          errors.push(
            `PBQ ${pbq.id} matching-matrix row "${row.id}" expectedMatch "${expectedId ?? ''}" not found in options`
          );
        }
      }
      break;
    }
    case 'rule-builder': {
      for (const rule of cfg.rules) {
        for (const field of rule.fields) {
          const validValues = new Set(field.choices.map((c) => c.value));
          const expectedVal = rule.expectedValues[field.id];
          if (!expectedVal || !validValues.has(expectedVal)) {
            errors.push(
              `PBQ ${pbq.id} rule "${rule.id}" field "${field.id}" expectedValue "${expectedVal ?? ''}" not found in choices`
            );
          }
        }
      }
      break;
    }
    case 'log-investigator': {
      for (const finding of cfg.findings) {
        const validChoiceIds = new Set(finding.choices.map((c) => c.id));
        if (!validChoiceIds.has(finding.expectedChoiceId)) {
          errors.push(
            `PBQ ${pbq.id} finding "${finding.id}" expectedChoiceId "${finding.expectedChoiceId}" not found in choices`
          );
        }
      }
      break;
    }
    case 'architecture-configurator': {
      const optionIds = new Set(cfg.options.map((o) => o.id));
      for (const slot of cfg.slots) {
        if (!optionIds.has(slot.expectedOptionId)) {
          errors.push(
            `PBQ ${pbq.id} slot "${slot.id}" expectedOptionId "${slot.expectedOptionId}" not found in options`
          );
        }
      }
      break;
    }
    case 'sequence-and-triage': {
      const stepIds = cfg.steps.map((s) => s.id);
      const stepIdSet = new Set(stepIds);
      const expectedSet = new Set(cfg.expectedOrder);
      if (
        cfg.expectedOrder.length !== stepIds.length ||
        expectedSet.size !== stepIdSet.size ||
        !cfg.expectedOrder.every((id) => stepIdSet.has(id))
      ) {
        errors.push(`PBQ ${pbq.id} expectedOrder is not a valid permutation of step IDs`);
      }
      const triageChoiceIds = new Set(cfg.triageDecision.choices.map((c) => c.id));
      if (!triageChoiceIds.has(cfg.triageDecision.expectedChoiceId)) {
        errors.push(
          `PBQ ${pbq.id} triageDecision expectedChoiceId "${cfg.triageDecision.expectedChoiceId}" not found in choices`
        );
      }
      break;
    }
  }
}

function buildPerfectPbqResponse(pbq: PbqQuestion) {
  const cfg = pbq.config;
  switch (cfg.template) {
    case 'matching-matrix':
      return { template: 'matching-matrix' as const, matches: { ...cfg.expectedMatches } };
    case 'rule-builder': {
      const rules: Record<string, Record<string, string>> = {};
      for (const r of cfg.rules) {
        rules[r.id] = { ...r.expectedValues };
      }
      return { template: 'rule-builder' as const, rules };
    }
    case 'log-investigator': {
      const findings: Record<string, string> = {};
      for (const f of cfg.findings) {
        findings[f.id] = f.expectedChoiceId;
      }
      return { template: 'log-investigator' as const, findings };
    }
    case 'architecture-configurator': {
      const placements: Record<string, string> = {};
      for (const s of cfg.slots) {
        placements[s.id] = s.expectedOptionId;
      }
      return { template: 'architecture-configurator' as const, placements };
    }
    case 'sequence-and-triage':
      return {
        template: 'sequence-and-triage' as const,
        orderedStepIds: [...cfg.expectedOrder],
        triageChoiceId: cfg.triageDecision.expectedChoiceId
      };
  }
}

async function main() {
  const args = process.argv.slice(2);
  const useFixture = args.includes('--fixture');

  let bundle: ContentBundle;
  if (useFixture) {
    const fixture = await import('../src/__fixtures__/sampleContent');
    bundle = fixture.FIXTURE_CONTENT_BUNDLE;
  } else {
    const prod = await import('../src/data/contentRegistry');
    bundle = await prod.loadFullContentBundle();
  }

  const mode = useFixture ? 'fixture' : 'production';
  const errors = validateBundle(bundle, mode);

  console.log(`\n=== Security+ Study Hub Content Validation (${mode.toUpperCase()}) ===`);
  console.log(`Exam Code   : ${EXAM_METADATA.examCode} (${EXAM_METADATA.examVersion})`);
  console.log(`Lessons     : ${bundle.lessons.length}`);
  console.log(`MCQ / MSQ   : ${bundle.questions.length}`);
  console.log(`PBQs        : ${bundle.pbqs.length}`);
  console.log(`Mock Forms  : ${bundle.mockForms.length}`);
  console.log(`Glossary    : ${bundle.glossary.length}`);
  console.log(`Flashcards  : ${bundle.flashcards.length}`);
  console.log(`Study Days  : ${bundle.studyPlan.length}`);

  if (errors.length > 0) {
    console.error(`\n❌ Validation FAILED with ${errors.length} error(s):`);
    for (const err of errors) {
      console.error(`  - ${err}`);
    }
    process.exit(1);
  }

  console.log('\n✅ Content validation PASSED with 0 errors.\n');
}

// Run main only when executed directly as CLI script
const isDirectRun =
  typeof process !== 'undefined' &&
  Array.isArray(process.argv) &&
  process.argv[1]?.replace(/\\/g, '/').endsWith('scripts/validate-content.ts');

if (isDirectRun) {
  main().catch((err) => {
    console.error('Fatal validation error:', err);
    process.exit(1);
  });
}
