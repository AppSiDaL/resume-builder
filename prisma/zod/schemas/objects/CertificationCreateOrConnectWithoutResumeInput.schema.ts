import { z } from 'zod';
import { CertificationWhereUniqueInputObjectSchema } from './CertificationWhereUniqueInput.schema';
import { CertificationCreateWithoutResumeInputObjectSchema } from './CertificationCreateWithoutResumeInput.schema';
import { CertificationUncheckedCreateWithoutResumeInputObjectSchema } from './CertificationUncheckedCreateWithoutResumeInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CertificationCreateOrConnectWithoutResumeInput> =
  z
    .object({
      where: z.lazy(() => CertificationWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => CertificationCreateWithoutResumeInputObjectSchema),
        z.lazy(
          () => CertificationUncheckedCreateWithoutResumeInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const CertificationCreateOrConnectWithoutResumeInputObjectSchema =
  Schema;
