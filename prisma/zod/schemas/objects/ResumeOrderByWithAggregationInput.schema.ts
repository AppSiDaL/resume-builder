import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ResumeCountOrderByAggregateInputObjectSchema } from './ResumeCountOrderByAggregateInput.schema';
import { ResumeMaxOrderByAggregateInputObjectSchema } from './ResumeMaxOrderByAggregateInput.schema';
import { ResumeMinOrderByAggregateInputObjectSchema } from './ResumeMinOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ResumeOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    title: z.lazy(() => SortOrderSchema).optional(),
    templateId: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    userId: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => ResumeCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z.lazy(() => ResumeMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => ResumeMinOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const ResumeOrderByWithAggregationInputObjectSchema = Schema;
