import { z } from 'zod';
import { EducationOrderByWithRelationInputObjectSchema } from './objects/EducationOrderByWithRelationInput.schema';
import { EducationWhereInputObjectSchema } from './objects/EducationWhereInput.schema';
import { EducationWhereUniqueInputObjectSchema } from './objects/EducationWhereUniqueInput.schema';
import { EducationScalarFieldEnumSchema } from './enums/EducationScalarFieldEnum.schema';

export const EducationFindManySchema = z.object({
  orderBy: z
    .union([
      EducationOrderByWithRelationInputObjectSchema,
      EducationOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: EducationWhereInputObjectSchema.optional(),
  cursor: EducationWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(EducationScalarFieldEnumSchema).optional(),
});
