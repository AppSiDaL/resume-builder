import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { ResumeRelationFilterObjectSchema } from './ResumeRelationFilter.schema';
import { ResumeWhereInputObjectSchema } from './ResumeWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EducationWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => EducationWhereInputObjectSchema),
        z.lazy(() => EducationWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => EducationWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => EducationWhereInputObjectSchema),
        z.lazy(() => EducationWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    institution: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    degree: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    fieldOfStudy: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    startDate: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    endDate: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    location: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    gpa: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    description: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    resumeId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    order: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    resume: z
      .union([
        z.lazy(() => ResumeRelationFilterObjectSchema),
        z.lazy(() => ResumeWhereInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const EducationWhereInputObjectSchema = Schema;
