import type {
  ActiveExamSession,
  ChoiceId,
  Domain,
  ExamAttempt,
  MockFormId,
  PbqQuestion,
  PbqResponse,
  Question
} from '../types';
import { selectRandomExamItems } from './allocation';
import { buildChoiceOrderMap, createSeededRng, seededShuffle } from './random';
import { gradeExamSession } from './scoring';

export function createNewExamSession(params: {
  mode: MockFormId | 'random';
  durationMinutes: number;
  seed: number;
  now: number;
  questions: readonly Question[];
  pbqs: readonly PbqQuestion[];
  domains: readonly Pick<Domain, 'id' | 'weightPercent'>[];
  formQuestionIds?: readonly string[];
  formPbqIds?: readonly string[];
}): ActiveExamSession {
  const {
    mode,
    durationMinutes,
    seed,
    now,
    questions,
    pbqs,
    domains,
    formQuestionIds,
    formPbqIds
  } = params;

  let chosenQuestionIds: string[];
  let chosenPbqIds: string[];

  if (mode === 'random') {
    const selection = selectRandomExamItems({
      totalItems: 90,
      targetPbqCount: 5,
      domains,
      questions,
      pbqs,
      seed
    });
    chosenQuestionIds = selection.selectedQuestionIds;
    chosenPbqIds = selection.selectedPbqIds;
  } else {
    if (!formQuestionIds || !formPbqIds) {
      throw new Error(`Form ${mode} requires explicit formQuestionIds and formPbqIds`);
    }
    chosenQuestionIds = [...formQuestionIds];
    chosenPbqIds = [...formPbqIds];
  }

  const questionLookup = new Map(questions.map((q) => [q.id, q]));
  const chosenQuestions = chosenQuestionIds
    .map((id) => questionLookup.get(id))
    .filter((q): q is Question => q !== undefined);

  if (chosenQuestions.length !== chosenQuestionIds.length) {
    throw new Error('One or more selected questionIds do not exist in question bank');
  }

  const pbqLookup = new Map(pbqs.map((p) => [p.id, p]));
  for (const pid of chosenPbqIds) {
    if (!pbqLookup.has(pid)) {
      throw new Error(`Missing PBQ ${pid} referenced by exam form`);
    }
  }

  const rng = createSeededRng(seed);
  // Present PBQs first (mirroring common exam flow where scenario sims appear early) followed by shuffled MCQs/MSQs
  const shuffledPbqs = seededShuffle(chosenPbqIds, rng).map((id) => ({
    itemId: id,
    kind: 'pbq' as const
  }));
  const shuffledQs = seededShuffle(chosenQuestionIds, rng).map((id) => ({
    itemId: id,
    kind: 'question' as const
  }));

  const uniqueSuffix = Math.abs(seed).toString(36);
  return {
    sessionId: `sess-${now}-${uniqueSuffix}`,
    attemptId: `att-${now}-${uniqueSuffix}`,
    mode,
    seed,
    startedAt: now,
    endsAt: now + durationMinutes * 60 * 1000,
    currentIndex: 0,
    itemOrder: [...shuffledPbqs, ...shuffledQs],
    choiceOrderByQuestionId: buildChoiceOrderMap(chosenQuestions, seed),
    answersByQuestionId: {},
    pbqAnswersById: {},
    flaggedIds: [],
    submitted: false
  };
}

export function getRemainingMs(session: Pick<ActiveExamSession, 'endsAt'>, now: number): number {
  return Math.max(0, session.endsAt - now);
}

export function isSessionExpired(session: Pick<ActiveExamSession, 'endsAt'>, now: number): boolean {
  return now >= session.endsAt;
}

export function formatRemainingTime(ms: number): string {
  const totalSeconds = Math.max(0, Math.ceil(ms / 1000));
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  if (hours > 0) {
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  }
  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

export function countUnansweredItems(
  session: ActiveExamSession,
  questionsById: ReadonlyMap<string, Question>
): number {
  let unanswered = 0;
  for (const item of session.itemOrder) {
    if (item.kind === 'question') {
      const q = questionsById.get(item.itemId);
      const picked = session.answersByQuestionId[item.itemId] ?? [];
      if (!q || picked.length < q.selectCount) {
        unanswered++;
      }
    } else {
      const pbqResp = session.pbqAnswersById[item.itemId];
      if (!isPbqAttempted(pbqResp)) {
        unanswered++;
      }
    }
  }
  return unanswered;
}

export function isPbqAttempted(resp: PbqResponse | undefined): boolean {
  if (!resp) return false;
  switch (resp.template) {
    case 'matching-matrix':
      return Object.keys(resp.matches).length > 0;
    case 'rule-builder':
      return Object.keys(resp.rules).length > 0;
    case 'log-investigator':
      return Object.keys(resp.findings).length > 0;
    case 'architecture-configurator':
      return Object.keys(resp.placements).length > 0;
    case 'sequence-and-triage':
      return resp.orderedStepIds.length > 0 || resp.triageChoiceId.length > 0;
  }
}

export function toggleFlag(session: ActiveExamSession, itemId: string): ActiveExamSession {
  const exists = session.flaggedIds.includes(itemId);
  return {
    ...session,
    flaggedIds: exists
      ? session.flaggedIds.filter((id) => id !== itemId)
      : [...session.flaggedIds, itemId]
  };
}

export function setQuestionAnswer(
  session: ActiveExamSession,
  question: Pick<Question, 'id' | 'type' | 'selectCount'>,
  choiceId: ChoiceId
): ActiveExamSession {
  if (session.submitted) return session;
  const current = session.answersByQuestionId[question.id] ?? [];
  let next: ChoiceId[];
  if (question.type === 'mcq') {
    next = [choiceId];
  } else {
    if (current.includes(choiceId)) {
      next = current.filter((c) => c !== choiceId);
    } else if (current.length < question.selectCount) {
      next = [...current, choiceId];
    } else {
      // Replace oldest selection when exceeding selectCount
      next = [...current.slice(1), choiceId];
    }
  }
  return {
    ...session,
    answersByQuestionId: {
      ...session.answersByQuestionId,
      [question.id]: next
    }
  };
}

export function setPbqAnswer(
  session: ActiveExamSession,
  pbqId: string,
  response: PbqResponse
): ActiveExamSession {
  if (session.submitted) return session;
  return {
    ...session,
    pbqAnswersById: {
      ...session.pbqAnswersById,
      [pbqId]: response
    }
  };
}

export interface SubmitExamResult {
  alreadySubmitted: boolean;
  updatedSession: ActiveExamSession;
  attempt: ExamAttempt | null;
}

/**
 * Idempotent exam submission: if the session was already submitted or an attempt
 * with the same attemptId already exists in history, returns the existing record
 * without duplicating scores or history.
 */
export function submitExamIdempotently(params: {
  session: ActiveExamSession;
  existingAttempts: readonly ExamAttempt[];
  questionsById: ReadonlyMap<string, Question>;
  pbqsById: ReadonlyMap<string, PbqQuestion>;
  domains: readonly Pick<Domain, 'id'>[];
  submittedAt: number;
  autoSubmitted: boolean;
}): SubmitExamResult {
  const { session, existingAttempts, questionsById, pbqsById, domains, submittedAt, autoSubmitted } =
    params;

  const existing = existingAttempts.find((a) => a.attemptId === session.attemptId);
  if (session.submitted || existing) {
    return {
      alreadySubmitted: true,
      updatedSession: { ...session, submitted: true },
      attempt: existing ?? null
    };
  }

  const attempt = gradeExamSession({
    session,
    questionsById,
    pbqsById,
    domains,
    submittedAt,
    autoSubmitted
  });

  return {
    alreadySubmitted: false,
    updatedSession: { ...session, submitted: true },
    attempt
  };
}
