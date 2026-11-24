import { z } from 'zod';

export const DomainIdSchema = z.enum(['D1', 'D2', 'D3', 'D4', 'D5']);
export type DomainId = z.infer<typeof DomainIdSchema>;

export const ObjectiveSchema = z.object({
  id: z.string().regex(/^[1-5]\.[1-9]$/),
  domainId: DomainIdSchema,
  titleEn: z.string().min(5),
  titleTh: z.string().min(5),
  subtopics: z.array(z.string().min(2)).min(1)
});
export type Objective = z.infer<typeof ObjectiveSchema>;

export const DomainSchema = z.object({
  id: DomainIdSchema,
  number: z.string().regex(/^[1-5]\.0$/),
  titleEn: z.string().min(3),
  titleTh: z.string().min(3),
  weightPercent: z.number().positive().max(100),
  descriptionTh: z.string().min(10),
  objectives: z.array(ObjectiveSchema).min(1)
});
export type Domain = z.infer<typeof DomainSchema>;

export const OfficialSourceSchema = z.object({
  title: z.string().min(3),
  url: z.string().url()
});
export type OfficialSource = z.infer<typeof OfficialSourceSchema>;

export const ExamMetadataSchema = z.object({
  examCode: z.literal('SY0-701'),
  examVersion: z.string().min(3),
  certificationName: z.string().min(3),
  launchDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  status: z.enum(['active', 'retired', 'upcoming']),
  retirementDateEn: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  retirementDateTh: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  newerVersionNote: z.string().min(10),
  verifiedDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  officialSources: z.array(OfficialSourceSchema).min(1),
  maxQuestions: z.number().int().positive(),
  durationMinutes: z.number().int().positive(),
  officialPassingScore: z.number().int().positive(),
  officialScoreScale: z.string().min(3),
  practiceTargetPercent: z.number().min(1).max(100),
  mockFormStructureNote: z.string().min(10),
  disclaimerTh: z.string().min(20),
  domains: z.array(DomainSchema).length(5)
});
export type ExamMetadata = z.infer<typeof ExamMetadataSchema>;

export const MockFormIdSchema = z.enum(['form-a', 'form-b', 'form-c']);
export type MockFormId = z.infer<typeof MockFormIdSchema>;

export const MockExamFormSchema = z.object({
  id: MockFormIdSchema,
  titleTh: z.string().min(3),
  subtitleTh: z.string().min(3),
  descriptionTh: z.string().min(10),
  durationMinutes: z.number().int().positive(),
  questionIds: z.array(z.string().min(3)),
  pbqIds: z.array(z.string().min(3))
});
export type MockExamForm = z.infer<typeof MockExamFormSchema>;
