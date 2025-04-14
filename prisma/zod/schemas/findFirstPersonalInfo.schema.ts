import { z } from 'zod';
import { PersonalInfoOrderByWithRelationInputObjectSchema } from './objects/PersonalInfoOrderByWithRelationInput.schema';
import { PersonalInfoWhereInputObjectSchema } from './objects/PersonalInfoWhereInput.schema';
import { PersonalInfoWhereUniqueInputObjectSchema } from './objects/PersonalInfoWhereUniqueInput.schema';
import { PersonalInfoScalarFieldEnumSchema } from './enums/PersonalInfoScalarFieldEnum.schema';

export const PersonalInfoFindFirstSchema = z.object({
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
  distinct: z.array(PersonalInfoScalarFieldEnumSchema).optional(),
});
