import { z } from 'zod';
import { UserCreateNestedOneWithoutResumesInputObjectSchema } from './UserCreateNestedOneWithoutResumesInput.schema';
import { PersonalInfoCreateNestedOneWithoutResumeInputObjectSchema } from './PersonalInfoCreateNestedOneWithoutResumeInput.schema';
import { EducationCreateNestedManyWithoutResumeInputObjectSchema } from './EducationCreateNestedManyWithoutResumeInput.schema';
import { ExperienceCreateNestedManyWithoutResumeInputObjectSchema } from './ExperienceCreateNestedManyWithoutResumeInput.schema';
import { SkillCreateNestedManyWithoutResumeInputObjectSchema } from './SkillCreateNestedManyWithoutResumeInput.schema';
import { CertificationCreateNestedManyWithoutResumeInputObjectSchema } from './CertificationCreateNestedManyWithoutResumeInput.schema';
import { LanguageCreateNestedManyWithoutResumeInputObjectSchema } from './LanguageCreateNestedManyWithoutResumeInput.schema';
import { ProjectCreateNestedManyWithoutResumeInputObjectSchema } from './ProjectCreateNestedManyWithoutResumeInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ResumeCreateWithoutReferencesInput> = z
  .object({
    id: z.string().optional(),
    title: z.string().optional(),
    templateId: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    user: z.lazy(() => UserCreateNestedOneWithoutResumesInputObjectSchema),
    personalInfo: z
      .lazy(() => PersonalInfoCreateNestedOneWithoutResumeInputObjectSchema)
      .optional(),
    educations: z
      .lazy(() => EducationCreateNestedManyWithoutResumeInputObjectSchema)
      .optional(),
    experiences: z
      .lazy(() => ExperienceCreateNestedManyWithoutResumeInputObjectSchema)
      .optional(),
    skills: z
      .lazy(() => SkillCreateNestedManyWithoutResumeInputObjectSchema)
      .optional(),
    certifications: z
      .lazy(() => CertificationCreateNestedManyWithoutResumeInputObjectSchema)
      .optional(),
    languages: z
      .lazy(() => LanguageCreateNestedManyWithoutResumeInputObjectSchema)
      .optional(),
    projects: z
      .lazy(() => ProjectCreateNestedManyWithoutResumeInputObjectSchema)
      .optional(),
  })
  .strict();

export const ResumeCreateWithoutReferencesInputObjectSchema = Schema;
