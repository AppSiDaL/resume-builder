import { z } from 'zod';
import { CertificationUpdateManyMutationInputObjectSchema } from './objects/CertificationUpdateManyMutationInput.schema';
import { CertificationWhereInputObjectSchema } from './objects/CertificationWhereInput.schema';

export const CertificationUpdateManySchema = z.object({
  data: CertificationUpdateManyMutationInputObjectSchema,
  where: CertificationWhereInputObjectSchema.optional(),
});
