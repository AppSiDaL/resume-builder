import { z } from 'zod';
import { ReferenceOrderByWithRelationInputObjectSchema } from './objects/ReferenceOrderByWithRelationInput.schema';
import { ReferenceWhereInputObjectSchema } from './objects/ReferenceWhereInput.schema';
import { ReferenceWhereUniqueInputObjectSchema } from './objects/ReferenceWhereUniqueInput.schema';
import { ReferenceScalarFieldEnumSchema } from './enums/ReferenceScalarFieldEnum.schema';

export const ReferenceFindFirstSchema = z.object({
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
  distinct: z.array(ReferenceScalarFieldEnumSchema).optional(),
});
