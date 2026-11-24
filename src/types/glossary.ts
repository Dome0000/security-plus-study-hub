import { z } from 'zod';
import { DomainIdSchema } from './exam';

export const GlossaryEntrySchema = z.object({
  id: z.string().min(2),
  termEn: z.string().min(2),
  acronym: z.string().optional(),
  fullNameEn: z.string().optional(),
  domainId: DomainIdSchema,
  objectiveIds: z.array(z.string().regex(/^[1-5]\.[1-9]$/)).min(1),
  explanationTh: z.string().min(10),
  usageContextTh: z.string().min(10),
  relatedLessonIds: z.array(z.string().regex(/^L[1-5]-\d{2}$/)).min(1)
});
export type GlossaryEntry = z.infer<typeof GlossaryEntrySchema>;

export const FlashcardSchema = z.object({
  id: z.string().min(3),
  domainId: DomainIdSchema,
  objectiveIds: z.array(z.string().regex(/^[1-5]\.[1-9]$/)).min(1),
  conceptPromptEn: z.string().min(10),
  conceptPromptTh: z.string().min(10),
  conceptualAnswerTh: z.string().min(20),
  compareContrastTh: z.string().min(10),
  relatedLessonIds: z.array(z.string().regex(/^L[1-5]-\d{2}$/)).min(1)
});
export type Flashcard = z.infer<typeof FlashcardSchema>;

export const StudyPlanDaySchema = z.object({
  day: z.number().int().min(1).max(30),
  phaseTh: z.string().min(3),
  titleTh: z.string().min(5),
  dayType: z.enum(['study', 'review', 'mock-exam']),
  estimatedMinutes: z.number().int().min(20).max(240),
  lessonIds: z.array(z.string().regex(/^L[1-5]-\d{2}$/)),
  objectiveIds: z.array(z.string().regex(/^[1-5]\.[1-9]$/)).min(1),
  practiceTargetCount: z.number().int().min(0),
  mockFormId: z.enum(['form-a', 'form-b', 'form-c']).optional(),
  tasksTh: z.array(z.string().min(5)).min(1),
  focusTipTh: z.string().min(10)
});
export type StudyPlanDay = z.infer<typeof StudyPlanDaySchema>;
