import { z } from 'zod';
import { ReferenceWhereInputObjectSchema } from './objects/ReferenceWhereInput.schema';
import { ReferenceOrderByWithAggregationInputObjectSchema } from './objects/ReferenceOrderByWithAggregationInput.schema';
import { ReferenceScalarWhereWithAggregatesInputObjectSchema } from './objects/ReferenceScalarWhereWithAggregatesInput.schema';
import { ReferenceScalarFieldEnumSchema } from './enums/ReferenceScalarFieldEnum.schema';

export const ReferenceGroupBySchema = z.object({
  where: ReferenceWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      ReferenceOrderByWithAggregationInputObjectSchema,
      ReferenceOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: ReferenceScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(ReferenceScalarFieldEnumSchema),
});
