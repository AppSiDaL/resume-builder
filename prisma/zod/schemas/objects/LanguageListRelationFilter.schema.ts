import { z } from 'zod';
import { LanguageWhereInputObjectSchema } from './LanguageWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LanguageListRelationFilter> = z
  .object({
    every: z.lazy(() => LanguageWhereInputObjectSchema).optional(),
    some: z.lazy(() => LanguageWhereInputObjectSchema).optional(),
    none: z.lazy(() => LanguageWhereInputObjectSchema).optional(),
  })
  .strict();

export const LanguageListRelationFilterObjectSchema = Schema;
