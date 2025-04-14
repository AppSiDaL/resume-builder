import { z } from 'zod';
import { PersonalInfoWhereInputObjectSchema } from './objects/PersonalInfoWhereInput.schema';
import { PersonalInfoOrderByWithAggregationInputObjectSchema } from './objects/PersonalInfoOrderByWithAggregationInput.schema';
import { PersonalInfoScalarWhereWithAggregatesInputObjectSchema } from './objects/PersonalInfoScalarWhereWithAggregatesInput.schema';
import { PersonalInfoScalarFieldEnumSchema } from './enums/PersonalInfoScalarFieldEnum.schema';

export const PersonalInfoGroupBySchema = z.object({
  where: PersonalInfoWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      PersonalInfoOrderByWithAggregationInputObjectSchema,
      PersonalInfoOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: PersonalInfoScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(PersonalInfoScalarFieldEnumSchema),
});
