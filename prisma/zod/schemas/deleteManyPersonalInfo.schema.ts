import { z } from 'zod';
import { PersonalInfoWhereInputObjectSchema } from './objects/PersonalInfoWhereInput.schema';

export const PersonalInfoDeleteManySchema = z.object({
  where: PersonalInfoWhereInputObjectSchema.optional(),
});
