import { z } from 'zod';
import { PersonalInfoWhereUniqueInputObjectSchema } from './objects/PersonalInfoWhereUniqueInput.schema';

export const PersonalInfoDeleteOneSchema = z.object({
  where: PersonalInfoWhereUniqueInputObjectSchema,
});
