import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { CertificationCountOrderByAggregateInputObjectSchema } from './CertificationCountOrderByAggregateInput.schema';
import { CertificationAvgOrderByAggregateInputObjectSchema } from './CertificationAvgOrderByAggregateInput.schema';
import { CertificationMaxOrderByAggregateInputObjectSchema } from './CertificationMaxOrderByAggregateInput.schema';
import { CertificationMinOrderByAggregateInputObjectSchema } from './CertificationMinOrderByAggregateInput.schema';
import { CertificationSumOrderByAggregateInputObjectSchema } from './CertificationSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CertificationOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    issuer: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    date: z
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
    resumeId: z.lazy(() => SortOrderSchema).optional(),
    order: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => CertificationCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z
      .lazy(() => CertificationAvgOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => CertificationMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => CertificationMinOrderByAggregateInputObjectSchema)
      .optional(),
    _sum: z
      .lazy(() => CertificationSumOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const CertificationOrderByWithAggregationInputObjectSchema = Schema;
