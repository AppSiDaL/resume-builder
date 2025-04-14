import { z } from 'zod';
import { EducationCreateInputObjectSchema } from './objects/EducationCreateInput.schema';
import { EducationUncheckedCreateInputObjectSchema } from './objects/EducationUncheckedCreateInput.schema';

export const EducationCreateOneSchema = z.object({
  data: z.union([
    EducationCreateInputObjectSchema,
    EducationUncheckedCreateInputObjectSchema,
  ]),
});
