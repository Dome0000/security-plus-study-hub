import type { ContentBundle } from '../../scripts/validate-content';
import type {
  DomainId,
  Flashcard,
  GlossaryEntry,
  Lesson,
  LessonSummary,
  MockExamForm,
  PbqQuestion,
  Question,
  StudyPlanDay
} from '../types';

/**
 * Lazy-loaded domain registry for production content.
 * Phase 4-6 will populate each domain file cleanly; keeping dynamic imports
 * enables Vite code-splitting by domain chunk.
 */
export async function loadLessonsByDomain(domainId: DomainId): Promise<Lesson[]> {
  switch (domainId) {
    case 'D1': {
      const mod = await import('./lessons/d1-lessons');
      return mod.D1_LESSONS;
    }
    case 'D2': {
      const [b1, b2] = await Promise.all([
        import('./lessons/d2-batch1'),
        import('./lessons/d2-batch2')
      ]);
      return [...b1.D2_LESSONS_BATCH1, ...b2.D2_LESSONS_BATCH2];
    }
    case 'D3': {
      const [b1, b2] = await Promise.all([
        import('./lessons/d3-batch1'),
        import('./lessons/d3-batch2')
      ]);
      return [...b1.D3_LESSONS_BATCH1, ...b2.D3_LESSONS_BATCH2];
    }
    case 'D4': {
      const [b1, b2] = await Promise.all([
        import('./lessons/d4-batch1'),
        import('./lessons/d4-batch2')
      ]);
      return [...b1.D4_LESSONS_BATCH1, ...b2.D4_LESSONS_BATCH2];
    }
    case 'D5': {
      const mod = await import('./lessons/d5-lessons');
      return mod.D5_LESSONS;
    }
  }
}

export async function loadAllLessons(): Promise<Lesson[]> {
  const groups = await Promise.all([
    loadLessonsByDomain('D1'),
    loadLessonsByDomain('D2'),
    loadLessonsByDomain('D3'),
    loadLessonsByDomain('D4'),
    loadLessonsByDomain('D5')
  ]);
  return groups.flat().sort((a, b) => a.order - b.order);
}

export async function loadLessonIndex(): Promise<LessonSummary[]> {
  const lessons = await loadAllLessons();
  return lessons.map(
    ({ id, examCode, domainId, order, titleTh, titleEn, estimatedMinutes, objectiveIds }) => ({
      id,
      examCode,
      domainId,
      order,
      titleTh,
      titleEn,
      estimatedMinutes,
      objectiveIds
    })
  );
}

export async function loadAllQuestions(): Promise<Question[]> {
  const [d1, d2a, d2b, d3a, d3b, d4a, d4b, d4c, d5a, d5b] = await Promise.all([
    import('./questions/q-d1'),
    import('./questions/q-d2-b1'),
    import('./questions/q-d2-b2'),
    import('./questions/q-d3-b1'),
    import('./questions/q-d3-b2'),
    import('./questions/q-d4-b1'),
    import('./questions/q-d4-b2'),
    import('./questions/q-d4-b3'),
    import('./questions/q-d5-b1'),
    import('./questions/q-d5-b2')
  ]);
  return [
    ...d1.Q_D1,
    ...d2a.Q_D2_B1,
    ...d2b.Q_D2_B2,
    ...d3a.Q_D3_B1,
    ...d3b.Q_D3_B2,
    ...d4a.Q_D4_B1,
    ...d4b.Q_D4_B2,
    ...d4c.Q_D4_B3,
    ...d5a.Q_D5_B1,
    ...d5b.Q_D5_B2
  ];
}

export async function loadAllPbqs(): Promise<PbqQuestion[]> {
  const [d1, d2, d3, d4, d5] = await Promise.all([
    import('./pbqs/pbq-d1'),
    import('./pbqs/pbq-d2'),
    import('./pbqs/pbq-d3'),
    import('./pbqs/pbq-d4'),
    import('./pbqs/pbq-d5')
  ]);
  return [...d1.PBQ_D1, ...d2.PBQ_D2, ...d3.PBQ_D3, ...d4.PBQ_D4, ...d5.PBQ_D5];
}

export async function loadMockForms(): Promise<MockExamForm[]> {
  const mod = await import('./mockForms');
  return mod.MOCK_EXAM_FORMS;
}

export async function loadGlossaryAndFlashcards(): Promise<{
  glossary: GlossaryEntry[];
  flashcards: Flashcard[];
}> {
  const mod = await import('./glossary');
  return { glossary: mod.GLOSSARY_ENTRIES, flashcards: mod.FLASHCARDS };
}

export async function loadStudyPlan(): Promise<StudyPlanDay[]> {
  const mod = await import('./studyPlan');
  return mod.STUDY_PLAN_DAYS;
}

export async function loadFullContentBundle(): Promise<ContentBundle> {
  const [lessons, questions, pbqs, mockForms, gf, studyPlan] = await Promise.all([
    loadAllLessons(),
    loadAllQuestions(),
    loadAllPbqs(),
    loadMockForms(),
    loadGlossaryAndFlashcards(),
    loadStudyPlan()
  ]);

  return {
    lessons,
    questions,
    pbqs,
    mockForms,
    glossary: gf.glossary,
    flashcards: gf.flashcards,
    studyPlan
  };
}
