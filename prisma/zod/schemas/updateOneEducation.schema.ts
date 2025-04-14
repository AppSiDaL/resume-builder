import { z } from 'zod';
import { EducationUpdateInputObjectSchema } from './objects/EducationUpdateInput.schema';
import { EducationUncheckedUpdateInputObjectSchema } from './objects/EducationUncheckedUpdateInput.schema';
import { EducationWhereUniqueInputObjectSchema } from './objects/EducationWhereUniqueInput.schema';

export const EducationUpdateOneSchema = z.object({
  data: z.union([
    EducationUpdateInputObjectSchema,
    EducationUncheckedUpdateInputObjectSchema,
  ]),
  where: EducationWhereUniqueInputObjectSchema,
});
