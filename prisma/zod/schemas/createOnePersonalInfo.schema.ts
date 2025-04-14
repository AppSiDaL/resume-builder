import { z } from 'zod';
import { PersonalInfoCreateInputObjectSchema } from './objects/PersonalInfoCreateInput.schema';
import { PersonalInfoUncheckedCreateInputObjectSchema } from './objects/PersonalInfoUncheckedCreateInput.schema';

export const PersonalInfoCreateOneSchema = z.object({
  data: z.union([
    PersonalInfoCreateInputObjectSchema,
    PersonalInfoUncheckedCreateInputObjectSchema,
  ]),
});
