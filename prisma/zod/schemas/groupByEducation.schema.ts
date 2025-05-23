import { z } from 'zod';
import { EducationWhereInputObjectSchema } from './objects/EducationWhereInput.schema';
import { EducationOrderByWithAggregationInputObjectSchema } from './objects/EducationOrderByWithAggregationInput.schema';
import { EducationScalarWhereWithAggregatesInputObjectSchema } from './objects/EducationScalarWhereWithAggregatesInput.schema';
import { EducationScalarFieldEnumSchema } from './enums/EducationScalarFieldEnum.schema';

export const EducationGroupBySchema = z.object({
  where: EducationWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      EducationOrderByWithAggregationInputObjectSchema,
      EducationOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: EducationScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(EducationScalarFieldEnumSchema),
});
