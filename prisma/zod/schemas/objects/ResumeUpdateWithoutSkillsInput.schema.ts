import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { UserUpdateOneRequiredWithoutResumesNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutResumesNestedInput.schema';
import { PersonalInfoUpdateOneWithoutResumeNestedInputObjectSchema } from './PersonalInfoUpdateOneWithoutResumeNestedInput.schema';
import { EducationUpdateManyWithoutResumeNestedInputObjectSchema } from './EducationUpdateManyWithoutResumeNestedInput.schema';
import { ExperienceUpdateManyWithoutResumeNestedInputObjectSchema } from './ExperienceUpdateManyWithoutResumeNestedInput.schema';
import { CertificationUpdateManyWithoutResumeNestedInputObjectSchema } from './CertificationUpdateManyWithoutResumeNestedInput.schema';
import { LanguageUpdateManyWithoutResumeNestedInputObjectSchema } from './LanguageUpdateManyWithoutResumeNestedInput.schema';
import { ProjectUpdateManyWithoutResumeNestedInputObjectSchema } from './ProjectUpdateManyWithoutResumeNestedInput.schema';
import { ReferenceUpdateManyWithoutResumeNestedInputObjectSchema } from './ReferenceUpdateManyWithoutResumeNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ResumeUpdateWithoutSkillsInput> = z
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
    user: z
      .lazy(() => UserUpdateOneRequiredWithoutResumesNestedInputObjectSchema)
      .optional(),
    personalInfo: z
      .lazy(() => PersonalInfoUpdateOneWithoutResumeNestedInputObjectSchema)
      .optional(),
    educations: z
      .lazy(() => EducationUpdateManyWithoutResumeNestedInputObjectSchema)
      .optional(),
    experiences: z
      .lazy(() => ExperienceUpdateManyWithoutResumeNestedInputObjectSchema)
      .optional(),
    certifications: z
      .lazy(() => CertificationUpdateManyWithoutResumeNestedInputObjectSchema)
      .optional(),
    languages: z
      .lazy(() => LanguageUpdateManyWithoutResumeNestedInputObjectSchema)
      .optional(),
    projects: z
      .lazy(() => ProjectUpdateManyWithoutResumeNestedInputObjectSchema)
      .optional(),
    references: z
      .lazy(() => ReferenceUpdateManyWithoutResumeNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const ResumeUpdateWithoutSkillsInputObjectSchema = Schema;
