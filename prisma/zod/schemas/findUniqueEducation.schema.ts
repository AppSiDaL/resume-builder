import { z } from 'zod';
import { EducationWhereUniqueInputObjectSchema } from './objects/EducationWhereUniqueInput.schema';

export const EducationFindUniqueSchema = z.object({
  where: EducationWhereUniqueInputObjectSchema,
});
