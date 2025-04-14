import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { ResumeRelationFilterObjectSchema } from './ResumeRelationFilter.schema';
import { ResumeWhereInputObjectSchema } from './ResumeWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PersonalInfoWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => PersonalInfoWhereInputObjectSchema),
        z.lazy(() => PersonalInfoWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => PersonalInfoWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => PersonalInfoWhereInputObjectSchema),
        z.lazy(() => PersonalInfoWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    fullName: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    title: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    email: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    phone: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    address: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    website: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    summary: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    resumeId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    resume: z
      .union([
        z.lazy(() => ResumeRelationFilterObjectSchema),
        z.lazy(() => ResumeWhereInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const PersonalInfoWhereInputObjectSchema = Schema;
