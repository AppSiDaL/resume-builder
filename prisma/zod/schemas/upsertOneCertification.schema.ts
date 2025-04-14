import { z } from 'zod';
import { CertificationWhereUniqueInputObjectSchema } from './objects/CertificationWhereUniqueInput.schema';
import { CertificationCreateInputObjectSchema } from './objects/CertificationCreateInput.schema';
import { CertificationUncheckedCreateInputObjectSchema } from './objects/CertificationUncheckedCreateInput.schema';
import { CertificationUpdateInputObjectSchema } from './objects/CertificationUpdateInput.schema';
import { CertificationUncheckedUpdateInputObjectSchema } from './objects/CertificationUncheckedUpdateInput.schema';

export const CertificationUpsertSchema = z.object({
  where: CertificationWhereUniqueInputObjectSchema,
  create: z.union([
    CertificationCreateInputObjectSchema,
    CertificationUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    CertificationUpdateInputObjectSchema,
    CertificationUncheckedUpdateInputObjectSchema,
  ]),
});
