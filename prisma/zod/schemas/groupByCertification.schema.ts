import { z } from 'zod';
import { CertificationWhereInputObjectSchema } from './objects/CertificationWhereInput.schema';
import { CertificationOrderByWithAggregationInputObjectSchema } from './objects/CertificationOrderByWithAggregationInput.schema';
import { CertificationScalarWhereWithAggregatesInputObjectSchema } from './objects/CertificationScalarWhereWithAggregatesInput.schema';
import { CertificationScalarFieldEnumSchema } from './enums/CertificationScalarFieldEnum.schema';

export const CertificationGroupBySchema = z.object({
  where: CertificationWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      CertificationOrderByWithAggregationInputObjectSchema,
      CertificationOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: CertificationScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(CertificationScalarFieldEnumSchema),
});
