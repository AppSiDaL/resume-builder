import { z } from 'zod';
import { CertificationWhereUniqueInputObjectSchema } from './objects/CertificationWhereUniqueInput.schema';

export const CertificationFindUniqueSchema = z.object({
  where: CertificationWhereUniqueInputObjectSchema,
});
