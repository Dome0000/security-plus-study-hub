import type { Domain, DomainId, PbqQuestion, Question } from '../types';
import { createSeededRng, seededShuffle } from './random';

export interface DomainAllocation {
  domainId: DomainId;
  weightPercent: number;
  exactQuota: number;
  count: number;
}

export class InsufficientQuestionsError extends Error {
  public readonly domainId: DomainId;
  public readonly required: number;
  public readonly available: number;
  public readonly itemKind: 'question' | 'pbq';

  constructor(
    domainId: DomainId,
    required: number,
    available: number,
    itemKind: 'question' | 'pbq'
  ) {
    super(
      `คลัง${itemKind === 'pbq' ? 'ข้อสอบ PBQ' : 'ข้อสอบ MCQ/MSQ'} ใน Domain ${domainId} มีไม่เพียงพอ (ต้องการ ${required} ข้อ แต่มี ${available} ข้อ)`
    );
    this.name = 'InsufficientQuestionsError';
    this.domainId = domainId;
    this.required = required;
    this.available = available;
    this.itemKind = itemKind;
  }
}

/**
 * Allocates `totalItems` across domains using the Largest-Remainder Method (Hamilton method)
 * so that domain counts sum strictly to `totalItems` and weights sum to 100%.
 */
export function allocateByDomainWeights(
  totalItems: number,
  domains: readonly Pick<Domain, 'id' | 'weightPercent'>[]
): DomainAllocation[] {
  if (!Number.isInteger(totalItems) || totalItems <= 0) {
    throw new Error(`totalItems must be a positive integer (received ${totalItems})`);
  }
  const weightSum = domains.reduce((sum, d) => sum + d.weightPercent, 0);
  if (Math.abs(weightSum - 100) > 0.001) {
    throw new Error(`Domain weights must sum to 100% (got ${weightSum}%)`);
  }

  const base = domains.map((d, index) => {
    const exactQuota = (totalItems * d.weightPercent) / 100;
    const floored = Math.floor(exactQuota);
    return {
      index,
      domainId: d.id,
      weightPercent: d.weightPercent,
      exactQuota,
      floored,
      remainder: exactQuota - floored
    };
  });

  const allocatedSum = base.reduce((sum, item) => sum + item.floored, 0);
  const remaining = totalItems - allocatedSum;

  const sortedByRemainder = [...base].sort((a, b) => {
    if (Math.abs(b.remainder - a.remainder) > 1e-9) {
      return b.remainder - a.remainder;
    }
    return a.index - b.index;
  });

  const extraIds = new Set<DomainId>();
  for (let i = 0; i < remaining; i++) {
    const target = sortedByRemainder[i];
    if (target) {
      extraIds.add(target.domainId);
    }
  }

  return base.map((item) => ({
    domainId: item.domainId,
    weightPercent: item.weightPercent,
    exactQuota: item.exactQuota,
    count: item.floored + (extraIds.has(item.domainId) ? 1 : 0)
  }));
}

export interface AssembledExamSelection {
  selectedQuestionIds: string[];
  selectedPbqIds: string[];
  allocations: Array<DomainAllocation & { pbqCount: number; questionCount: number }>;
}

/**
 * Selects a randomized exam matching domain weights (counting PBQs inside each domain's quota).
 * Throws InsufficientQuestionsError instead of silently duplicating questions.
 */
export function selectRandomExamItems(params: {
  totalItems: number;
  targetPbqCount: number;
  domains: readonly Pick<Domain, 'id' | 'weightPercent'>[];
  questions: readonly Question[];
  pbqs: readonly PbqQuestion[];
  seed: number;
}): AssembledExamSelection {
  const { totalItems, targetPbqCount, domains, questions, pbqs, seed } = params;
  if (targetPbqCount < 0 || targetPbqCount > totalItems) {
    throw new Error('targetPbqCount must be between 0 and totalItems');
  }

  const allocations = allocateByDomainWeights(totalItems, domains);
  const rng = createSeededRng(seed);

  // Distribute PBQs evenly across domains (1 per domain for 5 PBQs)
  const pbqPerDomain = new Map<DomainId, number>();
  for (const alloc of allocations) {
    pbqPerDomain.set(alloc.domainId, 0);
  }
  let pbqsLeft = targetPbqCount;
  let round = 0;
  while (pbqsLeft > 0) {
    let assignedInRound = false;
    for (const alloc of allocations) {
      if (pbqsLeft === 0) break;
      const currentPbq = pbqPerDomain.get(alloc.domainId) ?? 0;
      if (currentPbq < alloc.count) {
        pbqPerDomain.set(alloc.domainId, currentPbq + 1);
        pbqsLeft--;
        assignedInRound = true;
      }
    }
    round++;
    if (!assignedInRound || round > totalItems) {
      throw new Error('Unable to distribute target PBQs within domain allocations');
    }
  }

  const selectedQuestionIds: string[] = [];
  const selectedPbqIds: string[] = [];
  const detailedAllocations: Array<DomainAllocation & { pbqCount: number; questionCount: number }> = [];

  for (const alloc of allocations) {
    const pbqNeeded = pbqPerDomain.get(alloc.domainId) ?? 0;
    const questionNeeded = alloc.count - pbqNeeded;

    const domainPbqs = pbqs.filter((p) => p.domainId === alloc.domainId);
    if (domainPbqs.length < pbqNeeded) {
      throw new InsufficientQuestionsError(alloc.domainId, pbqNeeded, domainPbqs.length, 'pbq');
    }

    const domainQuestions = questions.filter((q) => q.domainId === alloc.domainId);
    if (domainQuestions.length < questionNeeded) {
      throw new InsufficientQuestionsError(
        alloc.domainId,
        questionNeeded,
        domainQuestions.length,
        'question'
      );
    }

    const pickedPbqs = seededShuffle(domainPbqs, rng).slice(0, pbqNeeded);
    const pickedQs = seededShuffle(domainQuestions, rng).slice(0, questionNeeded);

    for (const p of pickedPbqs) selectedPbqIds.push(p.id);
    for (const q of pickedQs) selectedQuestionIds.push(q.id);

    detailedAllocations.push({
      ...alloc,
      pbqCount: pbqNeeded,
      questionCount: questionNeeded
    });
  }

  return {
    selectedQuestionIds,
    selectedPbqIds,
    allocations: detailedAllocations
  };
}
