import { describe, expect, it } from 'vitest';
import { EXAM_METADATA } from '../../data/examMeta';
import {
  InsufficientQuestionsError,
  allocateByDomainWeights,
  buildChoiceOrderMap,
  countUnansweredItems,
  createNewExamSession,
  createSeededRng,
  formatRemainingTime,
  getRemainingMs,
  isSessionExpired,
  scoreMcq,
  scoreMsq,
  scorePbq,
  seededShuffle,
  selectRandomExamItems,
  setPbqAnswer,
  setQuestionAnswer,
  submitExamIdempotently,
  toggleFlag
} from '../index';
import type { PbqQuestion, Question } from '../../types';

function makeDummyQuestion(id: string, domainId: 'D1' | 'D2' | 'D3' | 'D4' | 'D5'): Question {
  const objMap = { D1: '1.1', D2: '2.1', D3: '3.1', D4: '4.1', D5: '5.1' };
  const lessonMap = { D1: 'L1-01', D2: 'L2-01', D3: 'L3-01', D4: 'L4-01', D5: 'L5-01' };
  return {
    id,
    examCode: 'SY0-701',
    domainId,
    objectiveIds: [objMap[domainId]],
    type: 'mcq',
    selectCount: 1,
    difficulty: 'intermediate',
    promptEn: `Sample scenario stem for ${id} testing domain ${domainId}.`,
    promptTh: `คำถามสถานการณ์ตัวอย่างสำหรับ ${id} ในโดเมน ${domainId}`,
    choices: [
      { id: 'c1', textEn: 'Option 1', textTh: 'ตัวเลือก 1' },
      { id: 'c2', textEn: 'Option 2', textTh: 'ตัวเลือก 2' },
      { id: 'c3', textEn: 'Option 3', textTh: 'ตัวเลือก 3' },
      { id: 'c4', textEn: 'Option 4', textTh: 'ตัวเลือก 4' }
    ],
    correctChoiceIds: ['c3'],
    explanationTh: 'คำอธิบายอย่างละเอียดว่าเหตุใด c3 จึงเป็นคำตอบที่ถูกต้องที่สุด',
    choiceRationales: {
      c1: 'ไม่ถูกต้องเพราะยังไม่ครอบคลุมเงื่อนไขหลัก',
      c2: 'ใช้กับกรณีอื่นที่ไม่ใช่สถานการณ์นี้',
      c3: 'ถูกต้องตรงตามหลักการความมั่นคงปลอดภัย',
      c4: 'ตัวเลือกนี้เป็นขั้นตอนถัดไป ไม่ใช่คำตอบหลัก'
    },
    misconceptionTh: 'ผู้เรียนมักสับสนระหว่าง c2 และ c3',
    relatedLessonIds: [lessonMap[domainId]],
    tags: ['test']
  };
}

function makeDummyPbq(
  id: string,
  domainId: 'D1' | 'D2' | 'D3' | 'D4' | 'D5',
  template: PbqQuestion['config']['template'] = 'matching-matrix'
): PbqQuestion {
  const objMap = { D1: '1.1', D2: '2.2', D3: '3.2', D4: '4.8', D5: '5.3' };
  const lessonMap = { D1: 'L1-01', D2: 'L2-02', D3: 'L3-03', D4: 'L4-11', D5: 'L5-04' };
  if (template === 'sequence-and-triage') {
    return {
      id,
      examCode: 'SY0-701',
      domainId,
      objectiveIds: [objMap[domainId]],
      difficulty: 'exam-ready',
      titleEn: 'IR Sequence PBQ',
      titleTh: 'เรียงลำดับ Incident Response',
      scenarioEn: 'An enterprise workstation exhibits ransomware beacon indicators.',
      scenarioTh: 'เครื่องลูกข่ายพบสัญญาณการเชื่อมต่อต้องสงสัยของมัลแวร์เรียกค่าไถ่',
      instructionsEn: 'Order the IR steps and choose the first containment action.',
      instructionsTh: 'เรียงลำดับขั้นตอน IR และเลือกการกักกันแรกที่เหมาะสม',
      config: {
        template: 'sequence-and-triage',
        sequencePromptEn: 'Order IR phases',
        sequencePromptTh: 'เรียงลำดับขั้นตอน IR',
        steps: [
          { id: 's1', labelEn: 'Preparation', labelTh: 'การเตรียมพร้อม' },
          { id: 's2', labelEn: 'Detection', labelTh: 'การตรวจจับ' },
          { id: 's3', labelEn: 'Containment', labelTh: 'การกักกัน' },
          { id: 's4', labelEn: 'Eradication', labelTh: 'การกำจัด' }
        ],
        expectedOrder: ['s1', 's2', 's3', 's4'],
        triageDecision: {
          promptEn: 'Best containment step?',
          promptTh: 'การกักกันที่เหมาะสมที่สุดคือ?',
          choices: [
            { id: 't1', textEn: 'Isolate host via EDR', labelTh: undefined } as unknown as {
              id: string;
              textEn: string;
              textTh: string;
            },
            { id: 't2', textEn: 'Reformat immediately', textTh: 'ฟอร์แมตทันที' },
            { id: 't3', textEn: 'Ignore alert', textTh: 'เพิกเฉยต่อการแจ้งเตือน' }
          ].map((c, idx) =>
            idx === 0 ? { id: 't1', textEn: 'Isolate host via EDR', textTh: 'แยกเครื่องผ่าน EDR' } : c
          ),
          expectedChoiceId: 't1'
        }
      },
      rubric: [
        { id: 'pos-1', descriptionTh: 'ลำดับที่ 1 ถูกต้อง', weight: 0.2 },
        { id: 'pos-2', descriptionTh: 'ลำดับที่ 2 ถูกต้อง', weight: 0.2 },
        { id: 'pos-3', descriptionTh: 'ลำดับที่ 3 ถูกต้อง', weight: 0.2 },
        { id: 'pos-4', descriptionTh: 'ลำดับที่ 4 ถูกต้อง', weight: 0.2 },
        { id: 'triage', descriptionTh: 'เลือกการกักกันเหมาะสม', weight: 0.2 }
      ],
      explanationTh: 'ขั้นตอน IR ต้องกักกันก่อนกำจัดเพื่อรักษาหลักฐานและหยุดการแพร่กระจาย',
      misconceptionTh: 'การฟอร์แมตทันทีทำลายหลักฐานทางนิติวิทยาศาสตร์',
      relatedLessonIds: [lessonMap[domainId]],
      tags: ['ir']
    };
  }

  return {
    id,
    examCode: 'SY0-701',
    domainId,
    objectiveIds: [objMap[domainId]],
    difficulty: 'intermediate',
    titleEn: `Matching PBQ ${id}`,
    titleTh: `จับคู่มาตรการควบคุม ${id}`,
    scenarioEn: 'Match each security control to its primary control category.',
    scenarioTh: 'จับคู่มาตรการควบคุมความปลอดภัยกับหมวดหมู่หลักที่เหมาะสม',
    instructionsEn: 'Select one option per row.',
    instructionsTh: 'เลือกคำตอบที่เหมาะสมที่สุดในแต่ละแถว',
    config: {
      template: 'matching-matrix',
      rows: [
        { id: 'r1', promptEn: 'Bollards', promptTh: 'เสากั้นรถ' },
        { id: 'r2', promptEn: 'Security Policy', promptTh: 'นโยบายความปลอดภัย' },
        { id: 'r3', promptEn: 'Firewall ACL', promptTh: 'กฎ Firewall' },
        { id: 'r4', promptEn: 'Security Awareness', promptTh: 'การอบรมพนักงาน' }
      ],
      options: [
        { id: 'o1', labelEn: 'Physical', labelTh: 'ทางกายภาพ' },
        { id: 'o2', labelEn: 'Managerial', labelTh: 'เชิงบริหารจัดการ' },
        { id: 'o3', labelEn: 'Technical', labelTh: 'เชิงเทคนิค' },
        { id: 'o4', labelEn: 'Operational', labelTh: 'เชิงปฏิบัติการ' }
      ],
      expectedMatches: { r1: 'o1', r2: 'o2', r3: 'o3', r4: 'o4' }
    },
    rubric: [
      { id: 'r1', descriptionTh: 'จับคู่ r1 ถูกต้อง', weight: 0.25 },
      { id: 'r2', descriptionTh: 'จับคู่ r2 ถูกต้อง', weight: 0.25 },
      { id: 'r3', descriptionTh: 'จับคู่ r3 ถูกต้อง', weight: 0.25 },
      { id: 'r4', descriptionTh: 'จับคู่ r4 ถูกต้อง', weight: 0.25 }
    ],
    explanationTh: 'การจำแนกหมวดหมู่ตาม NIST/CompTIA ช่วยวางแผนควบคุมครบทุกมิติ',
    misconceptionTh: 'มักสับสนระหว่าง Managerial และ Operational',
    relatedLessonIds: [lessonMap[domainId]],
    tags: ['controls']
  };
}

describe('Domain Allocation & Rounding', () => {
  it('allocates 90 questions proportionally using largest-remainder method', () => {
    const allocs = allocateByDomainWeights(90, EXAM_METADATA.domains);
    const counts = Object.fromEntries(allocs.map((a) => [a.domainId, a.count]));
    expect(counts).toEqual({ D1: 11, D2: 20, D3: 16, D4: 25, D5: 18 });
    expect(allocs.reduce((s, a) => s + a.count, 0)).toBe(90);
  });

  it('throws when domain weights do not sum to 100%', () => {
    expect(() =>
      allocateByDomainWeights(10, [
        { id: 'D1', weightPercent: 50 },
        { id: 'D2', weightPercent: 40 }
      ])
    ).toThrow(/sum to 100%/);
  });

  it('throws InsufficientQuestionsError instead of duplicating items', () => {
    const smallQs = [makeDummyQuestion('Q1-001', 'D1')];
    const pbqs = [
      makeDummyPbq('PBQ-D1-01', 'D1'),
      makeDummyPbq('PBQ-D2-01', 'D2'),
      makeDummyPbq('PBQ-D3-01', 'D3'),
      makeDummyPbq('PBQ-D4-01', 'D4'),
      makeDummyPbq('PBQ-D5-01', 'D5')
    ];
    expect(() =>
      selectRandomExamItems({
        totalItems: 90,
        targetPbqCount: 5,
        domains: EXAM_METADATA.domains,
        questions: smallQs,
        pbqs,
        seed: 42
      })
    ).toThrow(InsufficientQuestionsError);
  });
});

describe('Seeded Randomization & Option Shuffling', () => {
  it('produces identical shuffles for the same seed and preserves choice IDs', () => {
    const rng1 = createSeededRng(12345);
    const rng2 = createSeededRng(12345);
    const items = ['a', 'b', 'c', 'd', 'e', 'f'];
    expect(seededShuffle(items, rng1)).toEqual(seededShuffle(items, rng2));

    const q = makeDummyQuestion('Q1-001', 'D1');
    const orderMap = buildChoiceOrderMap([q], 999);
    const shuffledIds = orderMap[q.id] ?? [];
    expect(shuffledIds).toHaveLength(4);
    expect(new Set(shuffledIds)).toEqual(new Set(['c1', 'c2', 'c3', 'c4']));

    // Grading still uses stable ChoiceId ('c3') regardless of shuffled display position
    expect(scoreMcq(q, ['c3'])).toBe(1);
    expect(scoreMcq(q, ['c1'])).toBe(0);
  });
});

describe('Scoring (MCQ, MSQ, PBQ Partial Credit)', () => {
  it('scores MSQ strictly all-or-nothing', () => {
    const msq: Question = {
      ...makeDummyQuestion('Q2-001', 'D2'),
      type: 'msq',
      selectCount: 2,
      correctChoiceIds: ['c1', 'c4']
    };
    expect(scoreMsq(msq, ['c4', 'c1'])).toBe(1);
    expect(scoreMsq(msq, ['c1'])).toBe(0);
    expect(scoreMsq(msq, ['c1', 'c2'])).toBe(0);
    expect(scoreMsq(msq, ['c1', 'c4', 'c2'])).toBe(0);
  });

  it('scores PBQs with partial credit and full rubric breakdown', () => {
    const pbq = makeDummyPbq('PBQ-D1-01', 'D1', 'matching-matrix');
    const partial = scorePbq(pbq, {
      template: 'matching-matrix',
      matches: { r1: 'o1', r2: 'o2', r3: 'o4', r4: 'o3' }
    });
    expect(partial.earnedPoints).toBe(0.5);
    expect(partial.isFullyCorrect).toBe(false);
    expect(partial.rubricBreakdown).toHaveLength(4);

    const seqPbq = makeDummyPbq('PBQ-D4-02', 'D4', 'sequence-and-triage');
    const seqPartial = scorePbq(seqPbq, {
      template: 'sequence-and-triage',
      orderedStepIds: ['s1', 's2', 's4', 's3'],
      triageChoiceId: 't1'
    });
    expect(seqPartial.earnedPoints).toBe(0.6); // pos-1, pos-2, triage
  });
});

describe('Exam Session Timer, Resume, Flagging & Submit Idempotency', () => {
  it('manages absolute deadline, reload state, flagging, and idempotent submit', () => {
    const questions = [
      ...Array.from({ length: 10 }, (_, i) => makeDummyQuestion(`Q1-0${i + 10}`, 'D1')),
      ...Array.from({ length: 19 }, (_, i) => makeDummyQuestion(`Q2-0${i + 10}`, 'D2')),
      ...Array.from({ length: 15 }, (_, i) => makeDummyQuestion(`Q3-0${i + 10}`, 'D3')),
      ...Array.from({ length: 24 }, (_, i) => makeDummyQuestion(`Q4-0${i + 10}`, 'D4')),
      ...Array.from({ length: 17 }, (_, i) => makeDummyQuestion(`Q5-0${i + 10}`, 'D5'))
    ];
    const pbqs = [
      makeDummyPbq('PBQ-D1-01', 'D1'),
      makeDummyPbq('PBQ-D2-01', 'D2'),
      makeDummyPbq('PBQ-D3-01', 'D3'),
      makeDummyPbq('PBQ-D4-01', 'D4'),
      makeDummyPbq('PBQ-D5-01', 'D5')
    ];

    const startNow = 1_700_000_000_000;
    let session = createNewExamSession({
      mode: 'random',
      durationMinutes: 90,
      seed: 777,
      now: startNow,
      questions,
      pbqs,
      domains: EXAM_METADATA.domains
    });

    expect(session.itemOrder).toHaveLength(90);
    expect(getRemainingMs(session, startNow + 60_000)).toBe(89 * 60_000);
    expect(formatRemainingTime(getRemainingMs(session, startNow + 60_000))).toBe('01:29:00');
    expect(isSessionExpired(session, startNow + 90 * 60_000)).toBe(true);

    const qMap = new Map(questions.map((q) => [q.id, q]));
    const pMap = new Map(pbqs.map((p) => [p.id, p]));
    expect(countUnansweredItems(session, qMap)).toBe(90);

    const firstQ = questions[0]!;
    session = setQuestionAnswer(session, firstQ, 'c3');
    session = setPbqAnswer(session, 'PBQ-D1-01', {
      template: 'matching-matrix',
      matches: { r1: 'o1', r2: 'o2', r3: 'o3', r4: 'o4' }
    });
    session = toggleFlag(session, firstQ.id);
    expect(session.flaggedIds).toContain(firstQ.id);
    expect(countUnansweredItems(session, qMap)).toBe(88);

    // Simulate JSON roundtrip across browser reload
    const rehydrated = JSON.parse(JSON.stringify(session)) as typeof session;

    const firstSubmit = submitExamIdempotently({
      session: rehydrated,
      existingAttempts: [],
      questionsById: qMap,
      pbqsById: pMap,
      domains: EXAM_METADATA.domains,
      submittedAt: startNow + 120_000,
      autoSubmitted: false
    });

    expect(firstSubmit.alreadySubmitted).toBe(false);
    expect(firstSubmit.attempt).not.toBeNull();
    expect(firstSubmit.attempt?.earnedPoints).toBe(2); // 1 MCQ + 1 full PBQ

    // Second submit with same session/attempt must be idempotent
    const secondSubmit = submitExamIdempotently({
      session: firstSubmit.updatedSession,
      existingAttempts: firstSubmit.attempt ? [firstSubmit.attempt] : [],
      questionsById: qMap,
      pbqsById: pMap,
      domains: EXAM_METADATA.domains,
      submittedAt: startNow + 125_000,
      autoSubmitted: false
    });

    expect(secondSubmit.alreadySubmitted).toBe(true);
    expect(secondSubmit.attempt?.attemptId).toBe(firstSubmit.attempt?.attemptId);
  });
});
