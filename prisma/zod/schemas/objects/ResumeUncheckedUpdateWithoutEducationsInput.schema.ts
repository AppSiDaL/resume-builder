import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { PersonalInfoUncheckedUpdateOneWithoutResumeNestedInputObjectSchema } from './PersonalInfoUncheckedUpdateOneWithoutResumeNestedInput.schema';
import { ExperienceUncheckedUpdateManyWithoutResumeNestedInputObjectSchema } from './ExperienceUncheckedUpdateManyWithoutResumeNestedInput.schema';
import { SkillUncheckedUpdateManyWithoutResumeNestedInputObjectSchema } from './SkillUncheckedUpdateManyWithoutResumeNestedInput.schema';
import { CertificationUncheckedUpdateManyWithoutResumeNestedInputObjectSchema } from './CertificationUncheckedUpdateManyWithoutResumeNestedInput.schema';
import { LanguageUncheckedUpdateManyWithoutResumeNestedInputObjectSchema } from './LanguageUncheckedUpdateManyWithoutResumeNestedInput.schema';
import { ProjectUncheckedUpdateManyWithoutResumeNestedInputObjectSchema } from './ProjectUncheckedUpdateManyWithoutResumeNestedInput.schema';
import { ReferenceUncheckedUpdateManyWithoutResumeNestedInputObjectSchema } from './ReferenceUncheckedUpdateManyWithoutResumeNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ResumeUncheckedUpdateWithoutEducationsInput> = z
  .object({
    id: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    title: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    templateId: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    createdAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    updatedAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    userId: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    personalInfo: z
      .lazy(
        () =>
          PersonalInfoUncheckedUpdateOneWithoutResumeNestedInputObjectSchema,
      )
      .optional(),
    experiences: z
      .lazy(
        () => ExperienceUncheckedUpdateManyWithoutResumeNestedInputObjectSchema,
      )
      .optional(),
    skills: z
      .lazy(() => SkillUncheckedUpdateManyWithoutResumeNestedInputObjectSchema)
      .optional(),
    certifications: z
      .lazy(
        () =>
          CertificationUncheckedUpdateManyWithoutResumeNestedInputObjectSchema,
      )
      .optional(),
    languages: z
      .lazy(
        () => LanguageUncheckedUpdateManyWithoutResumeNestedInputObjectSchema,
      )
      .optional(),
    projects: z
      .lazy(
        () => ProjectUncheckedUpdateManyWithoutResumeNestedInputObjectSchema,
      )
      .optional(),
    references: z
      .lazy(
        () => ReferenceUncheckedUpdateManyWithoutResumeNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const ResumeUncheckedUpdateWithoutEducationsInputObjectSchema = Schema;
