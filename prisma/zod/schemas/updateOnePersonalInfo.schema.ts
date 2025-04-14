import { z } from 'zod';
import { PersonalInfoUpdateInputObjectSchema } from './objects/PersonalInfoUpdateInput.schema';
import { PersonalInfoUncheckedUpdateInputObjectSchema } from './objects/PersonalInfoUncheckedUpdateInput.schema';
import { PersonalInfoWhereUniqueInputObjectSchema } from './objects/PersonalInfoWhereUniqueInput.schema';

export const PersonalInfoUpdateOneSchema = z.object({
  data: z.union([
    PersonalInfoUpdateInputObjectSchema,
    PersonalInfoUncheckedUpdateInputObjectSchema,
  ]),
  where: PersonalInfoWhereUniqueInputObjectSchema,
});
