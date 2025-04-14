import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema';
import { PersonalInfoOrderByWithRelationInputObjectSchema } from './PersonalInfoOrderByWithRelationInput.schema';
import { EducationOrderByRelationAggregateInputObjectSchema } from './EducationOrderByRelationAggregateInput.schema';
import { ExperienceOrderByRelationAggregateInputObjectSchema } from './ExperienceOrderByRelationAggregateInput.schema';
import { SkillOrderByRelationAggregateInputObjectSchema } from './SkillOrderByRelationAggregateInput.schema';
import { CertificationOrderByRelationAggregateInputObjectSchema } from './CertificationOrderByRelationAggregateInput.schema';
import { LanguageOrderByRelationAggregateInputObjectSchema } from './LanguageOrderByRelationAggregateInput.schema';
import { ProjectOrderByRelationAggregateInputObjectSchema } from './ProjectOrderByRelationAggregateInput.schema';
import { ReferenceOrderByRelationAggregateInputObjectSchema } from './ReferenceOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ResumeOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    title: z.lazy(() => SortOrderSchema).optional(),
    templateId: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    userId: z.lazy(() => SortOrderSchema).optional(),
    user: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
    personalInfo: z
      .lazy(() => PersonalInfoOrderByWithRelationInputObjectSchema)
      .optional(),
    educations: z
      .lazy(() => EducationOrderByRelationAggregateInputObjectSchema)
      .optional(),
    experiences: z
      .lazy(() => ExperienceOrderByRelationAggregateInputObjectSchema)
      .optional(),
    skills: z
      .lazy(() => SkillOrderByRelationAggregateInputObjectSchema)
      .optional(),
    certifications: z
      .lazy(() => CertificationOrderByRelationAggregateInputObjectSchema)
      .optional(),
    languages: z
      .lazy(() => LanguageOrderByRelationAggregateInputObjectSchema)
      .optional(),
    projects: z
      .lazy(() => ProjectOrderByRelationAggregateInputObjectSchema)
      .optional(),
    references: z
      .lazy(() => ReferenceOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const ResumeOrderByWithRelationInputObjectSchema = Schema;
