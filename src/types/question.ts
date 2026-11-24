import { z } from 'zod';
import { DomainIdSchema } from './exam';

export const ChoiceIdSchema = z.enum(['c1', 'c2', 'c3', 'c4', 'c5', 'c6']);
export type ChoiceId = z.infer<typeof ChoiceIdSchema>;

export const DifficultySchema = z.enum(['foundation', 'intermediate', 'exam-ready']);
export type Difficulty = z.infer<typeof DifficultySchema>;

export const QuestionChoiceSchema = z.object({
  id: ChoiceIdSchema,
  textEn: z.string().min(1),
  textTh: z.string().min(1)
});
export type QuestionChoice = z.infer<typeof QuestionChoiceSchema>;

export const QuestionSchema = z
  .object({
    id: z.string().regex(/^Q[1-5]-\d{3}$/),
    examCode: z.literal('SY0-701'),
    domainId: DomainIdSchema,
    objectiveIds: z.array(z.string().regex(/^[1-5]\.[1-9]$/)).min(1),
    type: z.enum(['mcq', 'msq']),
    selectCount: z.number().int().min(1).max(3),
    difficulty: DifficultySchema,
    promptEn: z.string().min(20),
    promptTh: z.string().min(15),
    choices: z.array(QuestionChoiceSchema).min(4).max(6),
    correctChoiceIds: z.array(ChoiceIdSchema).min(1).max(3),
    explanationTh: z.string().min(25),
    choiceRationales: z.record(ChoiceIdSchema, z.string().min(10)),
    misconceptionTh: z.string().min(15),
    relatedLessonIds: z.array(z.string().regex(/^L[1-5]-\d{2}$/)).min(1),
    tags: z.array(z.string().min(2)).min(1)
  })
  .superRefine((q, ctx) => {
    const choiceIds = new Set(q.choices.map((c) => c.id));
    if (choiceIds.size !== q.choices.length) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Duplicate choice IDs within question'
      });
    }
    if (q.type === 'mcq' && q.selectCount !== 1) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'MCQ must have selectCount === 1'
      });
    }
    if (q.type === 'msq' && q.selectCount < 2) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'MSQ must have selectCount >= 2'
      });
    }
    if (q.correctChoiceIds.length !== q.selectCount) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'correctChoiceIds length must match selectCount'
      });
    }
    for (const cid of q.correctChoiceIds) {
      if (!choiceIds.has(cid)) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: `correctChoiceId ${cid} not found in choices`
        });
      }
    }
    for (const c of q.choices) {
      if (!q.choiceRationales[c.id]) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: `Missing choiceRationale for ${c.id}`
        });
      }
    }
  });
export type Question = z.infer<typeof QuestionSchema>;
