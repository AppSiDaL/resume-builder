import { z } from 'zod';
import { CertificationCreateManyInputObjectSchema } from './objects/CertificationCreateManyInput.schema';

export const CertificationCreateManySchema = z.object({
  data: z.union([
    CertificationCreateManyInputObjectSchema,
    z.array(CertificationCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});
