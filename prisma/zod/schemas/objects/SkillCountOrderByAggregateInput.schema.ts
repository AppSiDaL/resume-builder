import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SkillCountOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    level: z.lazy(() => SortOrderSchema).optional(),
    resumeId: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const SkillCountOrderByAggregateInputObjectSchema = Schema;
