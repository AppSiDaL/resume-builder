import { z } from 'zod';
import { PersonalInfoOrderByWithRelationInputObjectSchema } from './objects/PersonalInfoOrderByWithRelationInput.schema';
import { PersonalInfoWhereInputObjectSchema } from './objects/PersonalInfoWhereInput.schema';
import { PersonalInfoWhereUniqueInputObjectSchema } from './objects/PersonalInfoWhereUniqueInput.schema';
import { PersonalInfoCountAggregateInputObjectSchema } from './objects/PersonalInfoCountAggregateInput.schema';
import { PersonalInfoMinAggregateInputObjectSchema } from './objects/PersonalInfoMinAggregateInput.schema';
import { PersonalInfoMaxAggregateInputObjectSchema } from './objects/PersonalInfoMaxAggregateInput.schema';

export const PersonalInfoAggregateSchema = z.object({
  orderBy: z
    .union([
      PersonalInfoOrderByWithRelationInputObjectSchema,
      PersonalInfoOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: PersonalInfoWhereInputObjectSchema.optional(),
  cursor: PersonalInfoWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), PersonalInfoCountAggregateInputObjectSchema])
    .optional(),
  _min: PersonalInfoMinAggregateInputObjectSchema.optional(),
  _max: PersonalInfoMaxAggregateInputObjectSchema.optional(),
});
