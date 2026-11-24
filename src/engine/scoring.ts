import type {
  ActiveExamSession,
  ChoiceId,
  Domain,
  DomainId,
  DomainScoreSummary,
  ExamAttempt,
  GradedItemResult,
  PbqQuestion,
  PbqResponse,
  Question
} from '../types';

export function scoreMcq(
  question: Pick<Question, 'id' | 'type' | 'correctChoiceIds'>,
  selectedChoiceIds: readonly ChoiceId[]
): number {
  if (question.type !== 'mcq') {
    throw new Error(`scoreMcq called on non-MCQ question ${question.id}`);
  }
  if (selectedChoiceIds.length !== 1) return 0;
  const picked = selectedChoiceIds[0];
  const expected = question.correctChoiceIds[0];
  return picked !== undefined && picked === expected ? 1 : 0;
}

export function scoreMsq(
  question: Pick<Question, 'id' | 'type' | 'correctChoiceIds'>,
  selectedChoiceIds: readonly ChoiceId[]
): number {
  if (question.type !== 'msq') {
    throw new Error(`scoreMsq called on non-MSQ question ${question.id}`);
  }
  const uniqueSelected = new Set(selectedChoiceIds);
  const expectedSet = new Set(question.correctChoiceIds);
  if (uniqueSelected.size !== expectedSet.size) return 0;
  for (const cid of expectedSet) {
    if (!uniqueSelected.has(cid)) return 0;
  }
  return 1;
}

export interface PbqRubricCriterionResult {
  criterionId: string;
  descriptionTh: string;
  weight: number;
  earned: number;
  passed: boolean;
}

export interface PbqScoreResult {
  earnedPoints: number;
  isFullyCorrect: boolean;
  rubricBreakdown: PbqRubricCriterionResult[];
}

/**
 * Evaluates an interactive PBQ response using its itemized weighted rubric (0 to 1).
 */
export function scorePbq(pbq: PbqQuestion, response: PbqResponse | undefined): PbqScoreResult {
  const cfg = pbq.config;
  const breakdown: PbqRubricCriterionResult[] = [];
  const criterionChecks = new Map<string, boolean>();

  if (response && response.template === cfg.template) {
    if (cfg.template === 'matching-matrix' && response.template === 'matching-matrix') {
      for (const row of cfg.rows) {
        const expected = cfg.expectedMatches[row.id];
        const actual = response.matches[row.id];
        criterionChecks.set(row.id, expected !== undefined && actual === expected);
      }
    } else if (cfg.template === 'rule-builder' && response.template === 'rule-builder') {
      for (const rule of cfg.rules) {
        const submittedRule = response.rules[rule.id] ?? {};
        const allFieldsMatch = Object.entries(rule.expectedValues).every(
          ([fieldId, expectedVal]) => submittedRule[fieldId] === expectedVal
        );
        criterionChecks.set(rule.id, allFieldsMatch);
      }
    } else if (cfg.template === 'log-investigator' && response.template === 'log-investigator') {
      for (const finding of cfg.findings) {
        criterionChecks.set(finding.id, response.findings[finding.id] === finding.expectedChoiceId);
      }
    } else if (
      cfg.template === 'architecture-configurator' &&
      response.template === 'architecture-configurator'
    ) {
      for (const slot of cfg.slots) {
        criterionChecks.set(slot.id, response.placements[slot.id] === slot.expectedOptionId);
      }
    } else if (
      cfg.template === 'sequence-and-triage' &&
      response.template === 'sequence-and-triage'
    ) {
      // Check individual positional slots + triage decision, or sequence group + positions
      cfg.expectedOrder.forEach((expectedStepId, idx) => {
        const stepKey = `pos-${idx + 1}`;
        criterionChecks.set(stepKey, response.orderedStepIds[idx] === expectedStepId);
      });
      const fullOrderExact =
        response.orderedStepIds.length === cfg.expectedOrder.length &&
        cfg.expectedOrder.every((id, idx) => response.orderedStepIds[idx] === id);
      criterionChecks.set('sequence', fullOrderExact);
      criterionChecks.set('triage', response.triageChoiceId === cfg.triageDecision.expectedChoiceId);
    }
  }

  let earnedTotal = 0;
  for (const criterion of pbq.rubric) {
    const passed = criterionChecks.get(criterion.id) ?? false;
    const earned = passed ? criterion.weight : 0;
    earnedTotal += earned;
    breakdown.push({
      criterionId: criterion.id,
      descriptionTh: criterion.descriptionTh,
      weight: criterion.weight,
      earned,
      passed
    });
  }

  const clamped = Math.min(1, Math.max(0, Math.round(earnedTotal * 1000) / 1000));
  return {
    earnedPoints: clamped,
    isFullyCorrect: clamped >= 0.999,
    rubricBreakdown: breakdown
  };
}

export function gradeExamSession(params: {
  session: ActiveExamSession;
  questionsById: ReadonlyMap<string, Question>;
  pbqsById: ReadonlyMap<string, PbqQuestion>;
  domains: readonly Pick<Domain, 'id'>[];
  submittedAt: number;
  autoSubmitted: boolean;
}): ExamAttempt {
  const { session, questionsById, pbqsById, domains, submittedAt, autoSubmitted } = params;

  const itemResults: GradedItemResult[] = [];
  const domainEarned = new Map<DomainId, number>();
  const domainTotals = new Map<DomainId, number>();
  for (const d of domains) {
    domainEarned.set(d.id, 0);
    domainTotals.set(d.id, 0);
  }

  const objectiveMissedCount = new Map<string, number>();
  const recommendedLessonSet = new Set<string>();

  for (const item of session.itemOrder) {
    if (item.kind === 'question') {
      const q = questionsById.get(item.itemId);
      if (!q) {
        throw new Error(`Missing question ${item.itemId} while grading exam session`);
      }
      const selected = session.answersByQuestionId[q.id] ?? [];
      const earned = q.type === 'mcq' ? scoreMcq(q, selected) : scoreMsq(q, selected);
      const isCorrect = earned === 1;

      domainEarned.set(q.domainId, (domainEarned.get(q.domainId) ?? 0) + earned);
      domainTotals.set(q.domainId, (domainTotals.get(q.domainId) ?? 0) + 1);

      if (!isCorrect) {
        for (const objId of q.objectiveIds) {
          objectiveMissedCount.set(objId, (objectiveMissedCount.get(objId) ?? 0) + 1);
        }
        for (const lid of q.relatedLessonIds) {
          recommendedLessonSet.add(lid);
        }
      }

      itemResults.push({
        itemId: q.id,
        kind: 'question',
        domainId: q.domainId,
        objectiveIds: q.objectiveIds,
        earnedPoints: earned,
        maxPoints: 1,
        isCorrect,
        selectedChoiceIds: [...selected],
        relatedLessonIds: q.relatedLessonIds
      });
    } else {
      const pbq = pbqsById.get(item.itemId);
      if (!pbq) {
        throw new Error(`Missing PBQ ${item.itemId} while grading exam session`);
      }
      const response = session.pbqAnswersById[pbq.id];
      const graded = scorePbq(pbq, response);

      domainEarned.set(pbq.domainId, (domainEarned.get(pbq.domainId) ?? 0) + graded.earnedPoints);
      domainTotals.set(pbq.domainId, (domainTotals.get(pbq.domainId) ?? 0) + 1);

      if (!graded.isFullyCorrect) {
        for (const objId of pbq.objectiveIds) {
          objectiveMissedCount.set(objId, (objectiveMissedCount.get(objId) ?? 0) + 1);
        }
        for (const lid of pbq.relatedLessonIds) {
          recommendedLessonSet.add(lid);
        }
      }

      itemResults.push({
        itemId: pbq.id,
        kind: 'pbq',
        domainId: pbq.domainId,
        objectiveIds: pbq.objectiveIds,
        earnedPoints: graded.earnedPoints,
        maxPoints: 1,
        isCorrect: graded.isFullyCorrect,
        pbqResponse: response,
        rubricBreakdown: graded.rubricBreakdown,
        relatedLessonIds: pbq.relatedLessonIds
      });
    }
  }

  const totalItems = itemResults.length;
  const totalEarned =
    Math.round(itemResults.reduce((acc, r) => acc + r.earnedPoints, 0) * 1000) / 1000;
  const percentScore = totalItems > 0 ? Math.round((totalEarned / totalItems) * 1000) / 10 : 0;

  const domainScores: DomainScoreSummary[] = domains.map((d) => {
    const total = domainTotals.get(d.id) ?? 0;
    const earned = Math.round((domainEarned.get(d.id) ?? 0) * 1000) / 1000;
    return {
      domainId: d.id,
      earnedPoints: earned,
      totalItems: total,
      percent: total > 0 ? Math.round((earned / total) * 1000) / 10 : 0
    };
  });

  const weakObjectiveIds = [...objectiveMissedCount.entries()]
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .map(([objId]) => objId);

  return {
    attemptId: session.attemptId,
    mode: session.mode,
    seed: session.seed,
    startedAt: session.startedAt,
    submittedAt,
    autoSubmitted,
    totalItems,
    earnedPoints: totalEarned,
    percentScore,
    domainScores,
    weakObjectiveIds,
    recommendedLessonIds: [...recommendedLessonSet],
    itemResults
  };
}
