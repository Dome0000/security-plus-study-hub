import { z } from 'zod';
import type { PbqResponse } from './pbq';
import { ChoiceIdSchema } from './question';
import { DomainIdSchema } from './exam';

export const CURRENT_STORAGE_SCHEMA_VERSION = 1;

export const FlashcardConfidenceSchema = z.enum(['again', 'good', 'mastered']);
export type FlashcardConfidence = z.infer<typeof FlashcardConfidenceSchema>;

export const QuestionHistoryEntrySchema = z.object({
  questionId: z.string().min(3),
  attempts: z.number().int().nonnegative(),
  correctCount: z.number().int().nonnegative(),
  seenInPractice: z.boolean(),
  seenInMock: z.boolean(),
  lastResultCorrect: z.boolean(),
  lastAnsweredAt: z.string()
});
export type QuestionHistoryEntry = z.infer<typeof QuestionHistoryEntrySchema>;

export const PbqResponseSchema: z.ZodType<PbqResponse> = z.discriminatedUnion('template', [
  z.object({
    template: z.literal('matching-matrix'),
    matches: z.record(z.string(), z.string())
  }),
  z.object({
    template: z.literal('rule-builder'),
    rules: z.record(z.string(), z.record(z.string(), z.string()))
  }),
  z.object({
    template: z.literal('log-investigator'),
    findings: z.record(z.string(), z.string())
  }),
  z.object({
    template: z.literal('architecture-configurator'),
    placements: z.record(z.string(), z.string())
  }),
  z.object({
    template: z.literal('sequence-and-triage'),
    orderedStepIds: z.array(z.string()),
    triageChoiceId: z.string()
  })
]);

export const DomainScoreSummarySchema = z.object({
  domainId: DomainIdSchema,
  earnedPoints: z.number().nonnegative(),
  totalItems: z.number().int().nonnegative(),
  percent: z.number().min(0).max(100)
});
export type DomainScoreSummary = z.infer<typeof DomainScoreSummarySchema>;

export const GradedItemResultSchema = z.object({
  itemId: z.string().min(3),
  kind: z.enum(['question', 'pbq']),
  domainId: DomainIdSchema,
  objectiveIds: z.array(z.string()),
  earnedPoints: z.number().min(0).max(1),
  maxPoints: z.literal(1),
  isCorrect: z.boolean(),
  selectedChoiceIds: z.array(ChoiceIdSchema).optional(),
  pbqResponse: PbqResponseSchema.optional(),
  rubricBreakdown: z
    .array(
      z.object({
        criterionId: z.string(),
        descriptionTh: z.string(),
        weight: z.number(),
        earned: z.number(),
        passed: z.boolean()
      })
    )
    .optional(),
  relatedLessonIds: z.array(z.string())
});
export type GradedItemResult = z.infer<typeof GradedItemResultSchema>;

export const ExamAttemptSchema = z.object({
  attemptId: z.string().min(4),
  mode: z.enum(['form-a', 'form-b', 'form-c', 'random']),
  seed: z.number().int(),
  startedAt: z.number().int(),
  submittedAt: z.number().int(),
  autoSubmitted: z.boolean(),
  totalItems: z.number().int().positive(),
  earnedPoints: z.number().nonnegative(),
  percentScore: z.number().min(0).max(100),
  domainScores: z.array(DomainScoreSummarySchema),
  weakObjectiveIds: z.array(z.string()),
  recommendedLessonIds: z.array(z.string()),
  itemResults: z.array(GradedItemResultSchema)
});
export type ExamAttempt = z.infer<typeof ExamAttemptSchema>;

export const ActiveExamSessionSchema = z.object({
  sessionId: z.string().min(4),
  attemptId: z.string().min(4),
  mode: z.enum(['form-a', 'form-b', 'form-c', 'random']),
  seed: z.number().int(),
  startedAt: z.number().int(),
  endsAt: z.number().int(),
  currentIndex: z.number().int().nonnegative(),
  itemOrder: z.array(
    z.object({
      itemId: z.string(),
      kind: z.enum(['question', 'pbq'])
    })
  ),
  choiceOrderByQuestionId: z.record(z.string(), z.array(ChoiceIdSchema)),
  answersByQuestionId: z.record(z.string(), z.array(ChoiceIdSchema)),
  pbqAnswersById: z.record(z.string(), PbqResponseSchema),
  flaggedIds: z.array(z.string()),
  submitted: z.boolean()
});
export type ActiveExamSession = z.infer<typeof ActiveExamSessionSchema>;

export const UserPreferencesSchema = z.object({
  theme: z.enum(['light', 'dark']),
  showThaiTranslation: z.boolean(),
  fontSize: z.enum(['normal', 'large'])
});
export type UserPreferences = z.infer<typeof UserPreferencesSchema>;

export const UserProgressSchema = z.object({
  schemaVersion: z.number().int().positive(),
  lastLessonId: z.string().optional(),
  completedLessonIds: z.array(z.string()),
  bookmarkedLessonIds: z.array(z.string()),
  completedStudyDays: z.array(z.number().int().min(1).max(30)),
  flashcardProgress: z.record(z.string(), FlashcardConfidenceSchema),
  questionHistory: z.record(z.string(), QuestionHistoryEntrySchema),
  examAttempts: z.array(ExamAttemptSchema),
  activeExamSession: ActiveExamSessionSchema.nullable(),
  preferences: UserPreferencesSchema
});
export type UserProgress = z.infer<typeof UserProgressSchema>;
