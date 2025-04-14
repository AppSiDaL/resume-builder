import { z } from 'zod';
import { CertificationCreateInputObjectSchema } from './objects/CertificationCreateInput.schema';
import { CertificationUncheckedCreateInputObjectSchema } from './objects/CertificationUncheckedCreateInput.schema';

export const CertificationCreateOneSchema = z.object({
  data: z.union([
    CertificationCreateInputObjectSchema,
    CertificationUncheckedCreateInputObjectSchema,
  ]),
});
