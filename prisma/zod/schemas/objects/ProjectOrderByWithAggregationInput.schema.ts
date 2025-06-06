import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { ProjectCountOrderByAggregateInputObjectSchema } from './ProjectCountOrderByAggregateInput.schema';
import { ProjectAvgOrderByAggregateInputObjectSchema } from './ProjectAvgOrderByAggregateInput.schema';
import { ProjectMaxOrderByAggregateInputObjectSchema } from './ProjectMaxOrderByAggregateInput.schema';
import { ProjectMinOrderByAggregateInputObjectSchema } from './ProjectMinOrderByAggregateInput.schema';
import { ProjectSumOrderByAggregateInputObjectSchema } from './ProjectSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProjectOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    description: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    url: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
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
    resumeId: z.lazy(() => SortOrderSchema).optional(),
    order: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => ProjectCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z.lazy(() => ProjectAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => ProjectMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => ProjectMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => ProjectSumOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const ProjectOrderByWithAggregationInputObjectSchema = Schema;
