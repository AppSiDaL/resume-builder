import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { EducationCountOrderByAggregateInputObjectSchema } from './EducationCountOrderByAggregateInput.schema';
import { EducationAvgOrderByAggregateInputObjectSchema } from './EducationAvgOrderByAggregateInput.schema';
import { EducationMaxOrderByAggregateInputObjectSchema } from './EducationMaxOrderByAggregateInput.schema';
import { EducationMinOrderByAggregateInputObjectSchema } from './EducationMinOrderByAggregateInput.schema';
import { EducationSumOrderByAggregateInputObjectSchema } from './EducationSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EducationOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    institution: z.lazy(() => SortOrderSchema).optional(),
    degree: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    fieldOfStudy: z
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
    location: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    gpa: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    description: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    resumeId: z.lazy(() => SortOrderSchema).optional(),
    order: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => EducationCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z
      .lazy(() => EducationAvgOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => EducationMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => EducationMinOrderByAggregateInputObjectSchema)
      .optional(),
    _sum: z
      .lazy(() => EducationSumOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const EducationOrderByWithAggregationInputObjectSchema = Schema;
