import { z } from 'zod';
import { CertificationUpdateInputObjectSchema } from './objects/CertificationUpdateInput.schema';
import { CertificationUncheckedUpdateInputObjectSchema } from './objects/CertificationUncheckedUpdateInput.schema';
import { CertificationWhereUniqueInputObjectSchema } from './objects/CertificationWhereUniqueInput.schema';

export const CertificationUpdateOneSchema = z.object({
  data: z.union([
    CertificationUpdateInputObjectSchema,
    CertificationUncheckedUpdateInputObjectSchema,
  ]),
  where: CertificationWhereUniqueInputObjectSchema,
});
