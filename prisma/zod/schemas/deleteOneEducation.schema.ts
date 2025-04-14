import { z } from 'zod';
import { EducationWhereUniqueInputObjectSchema } from './objects/EducationWhereUniqueInput.schema';

export const EducationDeleteOneSchema = z.object({
  where: EducationWhereUniqueInputObjectSchema,
});
