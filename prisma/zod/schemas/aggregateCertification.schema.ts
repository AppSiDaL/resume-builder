import { z } from 'zod';
import { CertificationOrderByWithRelationInputObjectSchema } from './objects/CertificationOrderByWithRelationInput.schema';
import { CertificationWhereInputObjectSchema } from './objects/CertificationWhereInput.schema';
import { CertificationWhereUniqueInputObjectSchema } from './objects/CertificationWhereUniqueInput.schema';
import { CertificationCountAggregateInputObjectSchema } from './objects/CertificationCountAggregateInput.schema';
import { CertificationMinAggregateInputObjectSchema } from './objects/CertificationMinAggregateInput.schema';
import { CertificationMaxAggregateInputObjectSchema } from './objects/CertificationMaxAggregateInput.schema';
import { CertificationAvgAggregateInputObjectSchema } from './objects/CertificationAvgAggregateInput.schema';
import { CertificationSumAggregateInputObjectSchema } from './objects/CertificationSumAggregateInput.schema';

export const CertificationAggregateSchema = z.object({
  orderBy: z
    .union([
      CertificationOrderByWithRelationInputObjectSchema,
      CertificationOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: CertificationWhereInputObjectSchema.optional(),
  cursor: CertificationWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), CertificationCountAggregateInputObjectSchema])
    .optional(),
  _min: CertificationMinAggregateInputObjectSchema.optional(),
  _max: CertificationMaxAggregateInputObjectSchema.optional(),
  _avg: CertificationAvgAggregateInputObjectSchema.optional(),
  _sum: CertificationSumAggregateInputObjectSchema.optional(),
});
