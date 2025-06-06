import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SkillSumOrderByAggregateInput> = z
  .object({
    level: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const SkillSumOrderByAggregateInputObjectSchema = Schema;
