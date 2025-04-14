import { z } from 'zod';
import { PersonalInfoUpdateManyMutationInputObjectSchema } from './objects/PersonalInfoUpdateManyMutationInput.schema';
import { PersonalInfoWhereInputObjectSchema } from './objects/PersonalInfoWhereInput.schema';

export const PersonalInfoUpdateManySchema = z.object({
  data: PersonalInfoUpdateManyMutationInputObjectSchema,
  where: PersonalInfoWhereInputObjectSchema.optional(),
});
