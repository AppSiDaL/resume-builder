import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { ResumeRelationFilterObjectSchema } from './ResumeRelationFilter.schema';
import { ResumeWhereInputObjectSchema } from './ResumeWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReferenceWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => ReferenceWhereInputObjectSchema),
        z.lazy(() => ReferenceWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => ReferenceWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => ReferenceWhereInputObjectSchema),
        z.lazy(() => ReferenceWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    name: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    company: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    position: z
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

export const ReferenceWhereInputObjectSchema = Schema;
