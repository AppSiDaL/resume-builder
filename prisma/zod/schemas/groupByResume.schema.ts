import { z } from 'zod';
import { ResumeWhereInputObjectSchema } from './objects/ResumeWhereInput.schema';
import { ResumeOrderByWithAggregationInputObjectSchema } from './objects/ResumeOrderByWithAggregationInput.schema';
import { ResumeScalarWhereWithAggregatesInputObjectSchema } from './objects/ResumeScalarWhereWithAggregatesInput.schema';
import { ResumeScalarFieldEnumSchema } from './enums/ResumeScalarFieldEnum.schema';

export const ResumeGroupBySchema = z.object({
  where: ResumeWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      ResumeOrderByWithAggregationInputObjectSchema,
      ResumeOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: ResumeScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(ResumeScalarFieldEnumSchema),
});
