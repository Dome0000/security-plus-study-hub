import { z } from 'zod';
import { DomainIdSchema } from './exam';

export const LessonStepSectionSchema = z.object({
  id: z.string().min(2),
  titleTh: z.string().min(3),
  contentTh: z.array(z.string().min(10)).min(1),
  keyPointsTh: z.array(z.string().min(5)).min(1)
});
export type LessonStepSection = z.infer<typeof LessonStepSectionSchema>;

export const LessonKeyTermSchema = z.object({
  termEn: z.string().min(2),
  acronym: z.string().optional(),
  explanationTh: z.string().min(8)
});
export type LessonKeyTerm = z.infer<typeof LessonKeyTermSchema>;

export const LessonScenarioSchema = z.object({
  titleTh: z.string().min(5),
  contextTh: z.string().min(20),
  decisionTh: z.string().min(15),
  takeawayTh: z.string().min(10)
});
export type LessonScenario = z.infer<typeof LessonScenarioSchema>;

export const LessonComparisonTableSchema = z.object({
  captionTh: z.string().min(3),
  headersTh: z.array(z.string().min(1)).min(2),
  rowsTh: z.array(z.array(z.string().min(1)).min(2)).min(2)
});
export type LessonComparisonTable = z.infer<typeof LessonComparisonTableSchema>;

export const LessonKnowledgeCheckChoiceSchema = z.object({
  id: z.enum(['a', 'b', 'c', 'd']),
  textTh: z.string().min(2)
});
export type LessonKnowledgeCheckChoice = z.infer<typeof LessonKnowledgeCheckChoiceSchema>;

export const LessonKnowledgeCheckSchema = z.object({
  id: z.string().min(3),
  questionTh: z.string().min(10),
  choices: z.array(LessonKnowledgeCheckChoiceSchema).length(4),
  correctChoiceId: z.enum(['a', 'b', 'c', 'd']),
  explanationTh: z.string().min(15)
});
export type LessonKnowledgeCheck = z.infer<typeof LessonKnowledgeCheckSchema>;

export const LessonReferenceSchema = z.object({
  title: z.string().min(3),
  noteTh: z.string().min(5)
});
export type LessonReference = z.infer<typeof LessonReferenceSchema>;

export const LessonSchema = z.object({
  id: z.string().regex(/^L[1-5]-\d{2}$/),
  examCode: z.literal('SY0-701'),
  domainId: DomainIdSchema,
  order: z.number().int().positive(),
  titleTh: z.string().min(5),
  titleEn: z.string().min(5),
  estimatedMinutes: z.number().int().min(5).max(120),
  // 1. Learning objectives
  learningObjectives: z.array(z.string().min(8)).min(2),
  // 2. Objective IDs covered
  objectiveIds: z.array(z.string().regex(/^[1-5]\.[1-9]$/)).min(1),
  // 3. Prerequisites
  prerequisites: z.array(z.string().min(3)).min(1),
  // 4. Step-by-step concept explanation (what, why, when, difference)
  sections: z.array(LessonStepSectionSchema).min(2),
  // 5. Key English terms with Thai explanations
  keyTerms: z.array(LessonKeyTermSchema).min(3),
  // 6. Realistic scenarios
  scenarios: z.array(LessonScenarioSchema).min(1),
  // 7. Comparison tables
  comparisonTables: z.array(LessonComparisonTableSchema).min(1),
  // 8. Applications and limitations
  applicationsAndLimitations: z.object({
    applicationsTh: z.array(z.string().min(8)).min(2),
    limitationsTh: z.array(z.string().min(8)).min(2)
  }),
  // 9. Common misconceptions
  commonMisconceptions: z.array(
    z.object({
      misconceptionTh: z.string().min(8),
      clarificationTh: z.string().min(10)
    })
  ).min(2),
  // 10. How to analyze scenario-based questions
  scenarioAnalysisGuide: z.object({
    approachStepsTh: z.array(z.string().min(8)).min(3),
    examSignalKeywords: z.array(
      z.object({
        keywordEn: z.string().min(2),
        meaningTh: z.string().min(6)
      })
    ).min(2)
  }),
  // 11. End-of-lesson summary
  summaryTh: z.array(z.string().min(10)).min(2),
  // 12. >= 3 Knowledge check questions with answers
  knowledgeChecks: z.array(LessonKnowledgeCheckSchema).min(3),
  // 13. References & related lessons
  references: z.array(LessonReferenceSchema).min(1),
  relatedLessonIds: z.array(z.string().regex(/^L[1-5]-\d{2}$/)).min(1)
});
export type Lesson = z.infer<typeof LessonSchema>;

export const LessonSummarySchema = LessonSchema.pick({
  id: true,
  examCode: true,
  domainId: true,
  order: true,
  titleTh: true,
  titleEn: true,
  estimatedMinutes: true,
  objectiveIds: true
});
export type LessonSummary = z.infer<typeof LessonSummarySchema>;
