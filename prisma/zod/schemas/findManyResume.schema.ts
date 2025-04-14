import { z } from 'zod';
import { ResumeOrderByWithRelationInputObjectSchema } from './objects/ResumeOrderByWithRelationInput.schema';
import { ResumeWhereInputObjectSchema } from './objects/ResumeWhereInput.schema';
import { ResumeWhereUniqueInputObjectSchema } from './objects/ResumeWhereUniqueInput.schema';
import { ResumeScalarFieldEnumSchema } from './enums/ResumeScalarFieldEnum.schema';

export const ResumeFindManySchema = z.object({
  orderBy: z
    .union([
      ResumeOrderByWithRelationInputObjectSchema,
      ResumeOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: ResumeWhereInputObjectSchema.optional(),
  cursor: ResumeWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(ResumeScalarFieldEnumSchema).optional(),
});
