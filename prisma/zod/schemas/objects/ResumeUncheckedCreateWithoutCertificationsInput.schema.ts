import { z } from 'zod';
import { PersonalInfoUncheckedCreateNestedOneWithoutResumeInputObjectSchema } from './PersonalInfoUncheckedCreateNestedOneWithoutResumeInput.schema';
import { EducationUncheckedCreateNestedManyWithoutResumeInputObjectSchema } from './EducationUncheckedCreateNestedManyWithoutResumeInput.schema';
import { ExperienceUncheckedCreateNestedManyWithoutResumeInputObjectSchema } from './ExperienceUncheckedCreateNestedManyWithoutResumeInput.schema';
import { SkillUncheckedCreateNestedManyWithoutResumeInputObjectSchema } from './SkillUncheckedCreateNestedManyWithoutResumeInput.schema';
import { LanguageUncheckedCreateNestedManyWithoutResumeInputObjectSchema } from './LanguageUncheckedCreateNestedManyWithoutResumeInput.schema';
import { ProjectUncheckedCreateNestedManyWithoutResumeInputObjectSchema } from './ProjectUncheckedCreateNestedManyWithoutResumeInput.schema';
import { ReferenceUncheckedCreateNestedManyWithoutResumeInputObjectSchema } from './ReferenceUncheckedCreateNestedManyWithoutResumeInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ResumeUncheckedCreateWithoutCertificationsInput> =
  z
    .object({
      id: z.string().optional(),
      title: z.string().optional(),
      templateId: z.string(),
      createdAt: z.coerce.date().optional(),
      updatedAt: z.coerce.date().optional(),
      userId: z.string(),
      personalInfo: z
        .lazy(
          () =>
            PersonalInfoUncheckedCreateNestedOneWithoutResumeInputObjectSchema,
        )
        .optional(),
      educations: z
        .lazy(
          () =>
            EducationUncheckedCreateNestedManyWithoutResumeInputObjectSchema,
        )
        .optional(),
      experiences: z
        .lazy(
          () =>
            ExperienceUncheckedCreateNestedManyWithoutResumeInputObjectSchema,
        )
        .optional(),
      skills: z
        .lazy(
          () => SkillUncheckedCreateNestedManyWithoutResumeInputObjectSchema,
        )
        .optional(),
      languages: z
        .lazy(
          () => LanguageUncheckedCreateNestedManyWithoutResumeInputObjectSchema,
        )
        .optional(),
      projects: z
        .lazy(
          () => ProjectUncheckedCreateNestedManyWithoutResumeInputObjectSchema,
        )
        .optional(),
      references: z
        .lazy(
          () =>
            ReferenceUncheckedCreateNestedManyWithoutResumeInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const ResumeUncheckedCreateWithoutCertificationsInputObjectSchema =
  Schema;
