import { z } from 'zod';
import { DomainIdSchema } from './exam';
import { DifficultySchema } from './question';

export const PbqTemplateSchema = z.enum([
  'matching-matrix',
  'rule-builder',
  'log-investigator',
  'architecture-configurator',
  'sequence-and-triage'
]);
export type PbqTemplate = z.infer<typeof PbqTemplateSchema>;

// 1. matching-matrix
export const MatchingMatrixConfigSchema = z.object({
  template: z.literal('matching-matrix'),
  rows: z.array(
    z.object({
      id: z.string().min(1),
      promptEn: z.string().min(3),
      promptTh: z.string().min(3)
    })
  ).min(3),
  options: z.array(
    z.object({
      id: z.string().min(1),
      labelEn: z.string().min(2),
      labelTh: z.string().min(2)
    })
  ).min(3),
  expectedMatches: z.record(z.string(), z.string())
});

// 2. rule-builder
export const RuleFieldSchema = z.object({
  id: z.string().min(1),
  labelEn: z.string().min(2),
  labelTh: z.string().min(2),
  choices: z.array(
    z.object({
      value: z.string().min(1),
      labelEn: z.string().min(1),
      labelTh: z.string().min(1)
    })
  ).min(2)
});

export const RuleBuilderConfigSchema = z.object({
  template: z.literal('rule-builder'),
  contextTableTitle: z.string().min(3),
  contextRows: z.array(
    z.object({
      label: z.string().min(1),
      value: z.string().min(1)
    })
  ).min(2),
  rules: z.array(
    z.object({
      id: z.string().min(1),
      titleEn: z.string().min(3),
      titleTh: z.string().min(3),
      fields: z.array(RuleFieldSchema).min(2),
      expectedValues: z.record(z.string(), z.string())
    })
  ).min(2)
});

// 3. log-investigator
export const LogInvestigatorConfigSchema = z.object({
  template: z.literal('log-investigator'),
  artifactTabs: z.array(
    z.object({
      id: z.string().min(1),
      title: z.string().min(2),
      lines: z.array(z.string().min(2)).min(2)
    })
  ).min(2),
  findings: z.array(
    z.object({
      id: z.string().min(1),
      promptEn: z.string().min(5),
      promptTh: z.string().min(5),
      choices: z.array(
        z.object({
          id: z.string().min(1),
          textEn: z.string().min(1),
          textTh: z.string().min(1)
        })
      ).min(3),
      expectedChoiceId: z.string().min(1)
    })
  ).min(3)
});

// 4. architecture-configurator
export const ArchitectureConfiguratorConfigSchema = z.object({
  template: z.literal('architecture-configurator'),
  diagramTitle: z.string().min(3),
  diagramType: z.enum(['zero-trust', 'perimeter-dmz', 'resilience-dr']),
  slots: z.array(
    z.object({
      id: z.string().min(1),
      zoneLabelEn: z.string().min(2),
      zoneLabelTh: z.string().min(2),
      roleHintEn: z.string().min(3),
      roleHintTh: z.string().min(3),
      expectedOptionId: z.string().min(1)
    })
  ).min(3),
  options: z.array(
    z.object({
      id: z.string().min(1),
      labelEn: z.string().min(2),
      labelTh: z.string().min(2)
    })
  ).min(4)
});

// 5. sequence-and-triage
export const SequenceAndTriageConfigSchema = z.object({
  template: z.literal('sequence-and-triage'),
  sequencePromptEn: z.string().min(5),
  sequencePromptTh: z.string().min(5),
  steps: z.array(
    z.object({
      id: z.string().min(1),
      labelEn: z.string().min(3),
      labelTh: z.string().min(3)
    })
  ).min(4),
  expectedOrder: z.array(z.string().min(1)).min(4),
  triageDecision: z.object({
    promptEn: z.string().min(5),
    promptTh: z.string().min(5),
    choices: z.array(
      z.object({
        id: z.string().min(1),
        textEn: z.string().min(2),
        textTh: z.string().min(2)
      })
    ).min(3),
    expectedChoiceId: z.string().min(1)
  })
});

export const PbqConfigSchema = z.discriminatedUnion('template', [
  MatchingMatrixConfigSchema,
  RuleBuilderConfigSchema,
  LogInvestigatorConfigSchema,
  ArchitectureConfiguratorConfigSchema,
  SequenceAndTriageConfigSchema
]);
export type PbqConfig = z.infer<typeof PbqConfigSchema>;

export const PbqRubricCriterionSchema = z.object({
  id: z.string().min(1),
  descriptionTh: z.string().min(5),
  weight: z.number().positive().max(1)
});
export type PbqRubricCriterion = z.infer<typeof PbqRubricCriterionSchema>;

export const PbqQuestionSchema = z
  .object({
    id: z.string().regex(/^PBQ-D[1-5]-\d{2}$/),
    examCode: z.literal('SY0-701'),
    domainId: DomainIdSchema,
    objectiveIds: z.array(z.string().regex(/^[1-5]\.[1-9]$/)).min(1),
    difficulty: DifficultySchema,
    titleEn: z.string().min(5),
    titleTh: z.string().min(5),
    scenarioEn: z.string().min(20),
    scenarioTh: z.string().min(20),
    instructionsEn: z.string().min(10),
    instructionsTh: z.string().min(10),
    config: PbqConfigSchema,
    rubric: z.array(PbqRubricCriterionSchema).min(3),
    explanationTh: z.string().min(25),
    misconceptionTh: z.string().min(15),
    relatedLessonIds: z.array(z.string().regex(/^L[1-5]-\d{2}$/)).min(1),
    tags: z.array(z.string().min(2)).min(1)
  })
  .superRefine((pbq, ctx) => {
    const sum = pbq.rubric.reduce((acc, item) => acc + item.weight, 0);
    if (Math.abs(sum - 1) > 0.001) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: `PBQ rubric weights must sum to 1.0 (got ${sum})`
      });
    }
  });
export type PbqQuestion = z.infer<typeof PbqQuestionSchema>;

export type PbqResponse =
  | { template: 'matching-matrix'; matches: Record<string, string> }
  | { template: 'rule-builder'; rules: Record<string, Record<string, string>> }
  | { template: 'log-investigator'; findings: Record<string, string> }
  | { template: 'architecture-configurator'; placements: Record<string, string> }
  | { template: 'sequence-and-triage'; orderedStepIds: string[]; triageChoiceId: string };
