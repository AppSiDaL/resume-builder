import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { PersonalInfoCountOrderByAggregateInputObjectSchema } from './PersonalInfoCountOrderByAggregateInput.schema';
import { PersonalInfoMaxOrderByAggregateInputObjectSchema } from './PersonalInfoMaxOrderByAggregateInput.schema';
import { PersonalInfoMinOrderByAggregateInputObjectSchema } from './PersonalInfoMinOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PersonalInfoOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    fullName: z.lazy(() => SortOrderSchema).optional(),
    title: z
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
    address: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    website: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    summary: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    resumeId: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => PersonalInfoCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => PersonalInfoMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => PersonalInfoMinOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const PersonalInfoOrderByWithAggregationInputObjectSchema = Schema;
