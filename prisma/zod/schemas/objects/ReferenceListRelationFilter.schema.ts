import { z } from 'zod';
import { ReferenceWhereInputObjectSchema } from './ReferenceWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReferenceListRelationFilter> = z
  .object({
    every: z.lazy(() => ReferenceWhereInputObjectSchema).optional(),
    some: z.lazy(() => ReferenceWhereInputObjectSchema).optional(),
    none: z.lazy(() => ReferenceWhereInputObjectSchema).optional(),
  })
  .strict();

export const ReferenceListRelationFilterObjectSchema = Schema;
