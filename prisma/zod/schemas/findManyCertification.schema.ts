import { z } from 'zod';
import { CertificationOrderByWithRelationInputObjectSchema } from './objects/CertificationOrderByWithRelationInput.schema';
import { CertificationWhereInputObjectSchema } from './objects/CertificationWhereInput.schema';
import { CertificationWhereUniqueInputObjectSchema } from './objects/CertificationWhereUniqueInput.schema';
import { CertificationScalarFieldEnumSchema } from './enums/CertificationScalarFieldEnum.schema';

export const CertificationFindManySchema = z.object({
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
  distinct: z.array(CertificationScalarFieldEnumSchema).optional(),
});
