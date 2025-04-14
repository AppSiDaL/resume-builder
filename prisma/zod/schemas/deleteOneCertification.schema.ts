import { z } from 'zod';
import { CertificationWhereUniqueInputObjectSchema } from './objects/CertificationWhereUniqueInput.schema';

export const CertificationDeleteOneSchema = z.object({
  where: CertificationWhereUniqueInputObjectSchema,
});
