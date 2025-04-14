import { z } from 'zod';
import { CertificationWhereInputObjectSchema } from './objects/CertificationWhereInput.schema';

export const CertificationDeleteManySchema = z.object({
  where: CertificationWhereInputObjectSchema.optional(),
});
