import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { ReferenceCountOrderByAggregateInputObjectSchema } from './ReferenceCountOrderByAggregateInput.schema';
import { ReferenceMaxOrderByAggregateInputObjectSchema } from './ReferenceMaxOrderByAggregateInput.schema';
import { ReferenceMinOrderByAggregateInputObjectSchema } from './ReferenceMinOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReferenceOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    company: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    position: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    email: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    phone: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    resumeId: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => ReferenceCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => ReferenceMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => ReferenceMinOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const ReferenceOrderByWithAggregationInputObjectSchema = Schema;
