import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { UserRelationFilterObjectSchema } from './UserRelationFilter.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { PersonalInfoRelationFilterObjectSchema } from './PersonalInfoRelationFilter.schema';
import { PersonalInfoWhereInputObjectSchema } from './PersonalInfoWhereInput.schema';
import { EducationListRelationFilterObjectSchema } from './EducationListRelationFilter.schema';
import { ExperienceListRelationFilterObjectSchema } from './ExperienceListRelationFilter.schema';
import { SkillListRelationFilterObjectSchema } from './SkillListRelationFilter.schema';
import { CertificationListRelationFilterObjectSchema } from './CertificationListRelationFilter.schema';
import { LanguageListRelationFilterObjectSchema } from './LanguageListRelationFilter.schema';
import { ProjectListRelationFilterObjectSchema } from './ProjectListRelationFilter.schema';
import { ReferenceListRelationFilterObjectSchema } from './ReferenceListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ResumeWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => ResumeWhereInputObjectSchema),
        z.lazy(() => ResumeWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => ResumeWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => ResumeWhereInputObjectSchema),
        z.lazy(() => ResumeWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    title: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    templateId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    createdAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    updatedAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    userId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    user: z
      .union([
        z.lazy(() => UserRelationFilterObjectSchema),
        z.lazy(() => UserWhereInputObjectSchema),
      ])
      .optional(),
    personalInfo: z
      .union([
        z.lazy(() => PersonalInfoRelationFilterObjectSchema),
        z.lazy(() => PersonalInfoWhereInputObjectSchema),
      ])
      .optional()
      .nullable(),
    educations: z
      .lazy(() => EducationListRelationFilterObjectSchema)
      .optional(),
    experiences: z
      .lazy(() => ExperienceListRelationFilterObjectSchema)
      .optional(),
    skills: z.lazy(() => SkillListRelationFilterObjectSchema).optional(),
    certifications: z
      .lazy(() => CertificationListRelationFilterObjectSchema)
      .optional(),
    languages: z.lazy(() => LanguageListRelationFilterObjectSchema).optional(),
    projects: z.lazy(() => ProjectListRelationFilterObjectSchema).optional(),
    references: z
      .lazy(() => ReferenceListRelationFilterObjectSchema)
      .optional(),
  })
  .strict();

export const ResumeWhereInputObjectSchema = Schema;
