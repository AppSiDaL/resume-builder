import { z } from 'zod';
import { LanguageOrderByWithRelationInputObjectSchema } from './objects/LanguageOrderByWithRelationInput.schema';
import { LanguageWhereInputObjectSchema } from './objects/LanguageWhereInput.schema';
import { LanguageWhereUniqueInputObjectSchema } from './objects/LanguageWhereUniqueInput.schema';
import { LanguageCountAggregateInputObjectSchema } from './objects/LanguageCountAggregateInput.schema';
import { LanguageMinAggregateInputObjectSchema } from './objects/LanguageMinAggregateInput.schema';
import { LanguageMaxAggregateInputObjectSchema } from './objects/LanguageMaxAggregateInput.schema';

export const LanguageAggregateSchema = z.object({
  orderBy: z
    .union([
      LanguageOrderByWithRelationInputObjectSchema,
      LanguageOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: LanguageWhereInputObjectSchema.optional(),
  cursor: LanguageWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), LanguageCountAggregateInputObjectSchema])
    .optional(),
  _min: LanguageMinAggregateInputObjectSchema.optional(),
  _max: LanguageMaxAggregateInputObjectSchema.optional(),
});
