import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { ExperienceCountOrderByAggregateInputObjectSchema } from './ExperienceCountOrderByAggregateInput.schema';
import { ExperienceAvgOrderByAggregateInputObjectSchema } from './ExperienceAvgOrderByAggregateInput.schema';
import { ExperienceMaxOrderByAggregateInputObjectSchema } from './ExperienceMaxOrderByAggregateInput.schema';
import { ExperienceMinOrderByAggregateInputObjectSchema } from './ExperienceMinOrderByAggregateInput.schema';
import { ExperienceSumOrderByAggregateInputObjectSchema } from './ExperienceSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExperienceOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    company: z.lazy(() => SortOrderSchema).optional(),
    position: z.lazy(() => SortOrderSchema).optional(),
    startDate: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    endDate: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    location: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    description: z.lazy(() => SortOrderSchema).optional(),
    resumeId: z.lazy(() => SortOrderSchema).optional(),
    order: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => ExperienceCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z
      .lazy(() => ExperienceAvgOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => ExperienceMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => ExperienceMinOrderByAggregateInputObjectSchema)
      .optional(),
    _sum: z
      .lazy(() => ExperienceSumOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const ExperienceOrderByWithAggregationInputObjectSchema = Schema;
