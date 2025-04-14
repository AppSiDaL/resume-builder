import { z } from 'zod';
import { CertificationScalarWhereInputObjectSchema } from './CertificationScalarWhereInput.schema';
import { CertificationUpdateManyMutationInputObjectSchema } from './CertificationUpdateManyMutationInput.schema';
import { CertificationUncheckedUpdateManyWithoutCertificationsInputObjectSchema } from './CertificationUncheckedUpdateManyWithoutCertificationsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CertificationUpdateManyWithWhereWithoutResumeInput> =
  z
    .object({
      where: z.lazy(() => CertificationScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => CertificationUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            CertificationUncheckedUpdateManyWithoutCertificationsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const CertificationUpdateManyWithWhereWithoutResumeInputObjectSchema =
  Schema;
