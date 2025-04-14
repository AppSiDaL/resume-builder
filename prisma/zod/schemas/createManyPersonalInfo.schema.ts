import { z } from 'zod';
import { PersonalInfoCreateManyInputObjectSchema } from './objects/PersonalInfoCreateManyInput.schema';

export const PersonalInfoCreateManySchema = z.object({
  data: z.union([
    PersonalInfoCreateManyInputObjectSchema,
    z.array(PersonalInfoCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});
