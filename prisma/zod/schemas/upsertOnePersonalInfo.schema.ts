import { z } from 'zod';
import { PersonalInfoWhereUniqueInputObjectSchema } from './objects/PersonalInfoWhereUniqueInput.schema';
import { PersonalInfoCreateInputObjectSchema } from './objects/PersonalInfoCreateInput.schema';
import { PersonalInfoUncheckedCreateInputObjectSchema } from './objects/PersonalInfoUncheckedCreateInput.schema';
import { PersonalInfoUpdateInputObjectSchema } from './objects/PersonalInfoUpdateInput.schema';
import { PersonalInfoUncheckedUpdateInputObjectSchema } from './objects/PersonalInfoUncheckedUpdateInput.schema';

export const PersonalInfoUpsertSchema = z.object({
  where: PersonalInfoWhereUniqueInputObjectSchema,
  create: z.union([
    PersonalInfoCreateInputObjectSchema,
    PersonalInfoUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    PersonalInfoUpdateInputObjectSchema,
    PersonalInfoUncheckedUpdateInputObjectSchema,
  ]),
});
