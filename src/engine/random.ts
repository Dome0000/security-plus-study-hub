import type { ChoiceId, Question } from '../types';

/**
 * Deterministic Mulberry32 PRNG for reproducible exam randomization & auditing.
 */
export function createSeededRng(seed: number): () => number {
  let state = seed >>> 0;
  return () => {
    state = (state + 0x6d2b79f5) >>> 0;
    let t = Math.imul(state ^ (state >>> 15), 1 | state);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/**
 * Returns a new Fisher-Yates shuffled copy without mutating the input array.
 */
export function seededShuffle<T>(items: readonly T[], rng: () => number): T[] {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    const current = copy[i];
    const swapTarget = copy[j];
    if (current !== undefined && swapTarget !== undefined) {
      copy[i] = swapTarget;
      copy[j] = current;
    }
  }
  return copy;
}

/**
 * Produces deterministic shuffled ChoiceId ordering per question so grading always
 * compares stable ChoiceIds and never positional indexes.
 */
export function buildChoiceOrderMap(
  questions: readonly Question[],
  seed: number
): Record<string, ChoiceId[]> {
  const rng = createSeededRng(seed ^ 0x9e3779b9);
  const map: Record<string, ChoiceId[]> = {};
  for (const question of questions) {
    const choiceIds = question.choices.map((c) => c.id);
    map[question.id] = seededShuffle(choiceIds, rng);
  }
  return map;
}
