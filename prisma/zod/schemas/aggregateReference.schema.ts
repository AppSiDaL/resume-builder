import { z } from 'zod';
import { ReferenceOrderByWithRelationInputObjectSchema } from './objects/ReferenceOrderByWithRelationInput.schema';
import { ReferenceWhereInputObjectSchema } from './objects/ReferenceWhereInput.schema';
import { ReferenceWhereUniqueInputObjectSchema } from './objects/ReferenceWhereUniqueInput.schema';
import { ReferenceCountAggregateInputObjectSchema } from './objects/ReferenceCountAggregateInput.schema';
import { ReferenceMinAggregateInputObjectSchema } from './objects/ReferenceMinAggregateInput.schema';
import { ReferenceMaxAggregateInputObjectSchema } from './objects/ReferenceMaxAggregateInput.schema';

export const ReferenceAggregateSchema = z.object({
  orderBy: z
    .union([
      ReferenceOrderByWithRelationInputObjectSchema,
      ReferenceOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: ReferenceWhereInputObjectSchema.optional(),
  cursor: ReferenceWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), ReferenceCountAggregateInputObjectSchema])
    .optional(),
  _min: ReferenceMinAggregateInputObjectSchema.optional(),
  _max: ReferenceMaxAggregateInputObjectSchema.optional(),
});
