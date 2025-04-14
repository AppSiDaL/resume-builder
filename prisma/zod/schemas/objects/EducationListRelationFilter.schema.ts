import { z } from 'zod';
import { EducationWhereInputObjectSchema } from './EducationWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EducationListRelationFilter> = z
  .object({
    every: z.lazy(() => EducationWhereInputObjectSchema).optional(),
    some: z.lazy(() => EducationWhereInputObjectSchema).optional(),
    none: z.lazy(() => EducationWhereInputObjectSchema).optional(),
  })
  .strict();

export const EducationListRelationFilterObjectSchema = Schema;
