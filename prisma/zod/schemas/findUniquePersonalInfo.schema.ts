import { z } from 'zod';
import { PersonalInfoWhereUniqueInputObjectSchema } from './objects/PersonalInfoWhereUniqueInput.schema';

export const PersonalInfoFindUniqueSchema = z.object({
  where: PersonalInfoWhereUniqueInputObjectSchema,
});
