import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { LanguageCountOrderByAggregateInputObjectSchema } from './LanguageCountOrderByAggregateInput.schema';
import { LanguageMaxOrderByAggregateInputObjectSchema } from './LanguageMaxOrderByAggregateInput.schema';
import { LanguageMinOrderByAggregateInputObjectSchema } from './LanguageMinOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LanguageOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    level: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    resumeId: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => LanguageCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z.lazy(() => LanguageMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => LanguageMinOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const LanguageOrderByWithAggregationInputObjectSchema = Schema;
