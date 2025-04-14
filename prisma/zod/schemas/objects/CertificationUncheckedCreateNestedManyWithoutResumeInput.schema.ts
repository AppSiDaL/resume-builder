import { z } from 'zod';
import { CertificationCreateWithoutResumeInputObjectSchema } from './CertificationCreateWithoutResumeInput.schema';
import { CertificationUncheckedCreateWithoutResumeInputObjectSchema } from './CertificationUncheckedCreateWithoutResumeInput.schema';
import { CertificationCreateOrConnectWithoutResumeInputObjectSchema } from './CertificationCreateOrConnectWithoutResumeInput.schema';
import { CertificationCreateManyResumeInputEnvelopeObjectSchema } from './CertificationCreateManyResumeInputEnvelope.schema';
import { CertificationWhereUniqueInputObjectSchema } from './CertificationWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CertificationUncheckedCreateNestedManyWithoutResumeInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => CertificationCreateWithoutResumeInputObjectSchema),
          z
            .lazy(() => CertificationCreateWithoutResumeInputObjectSchema)
            .array(),
          z.lazy(
            () => CertificationUncheckedCreateWithoutResumeInputObjectSchema,
          ),
          z
            .lazy(
              () => CertificationUncheckedCreateWithoutResumeInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => CertificationCreateOrConnectWithoutResumeInputObjectSchema,
          ),
          z
            .lazy(
              () => CertificationCreateOrConnectWithoutResumeInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => CertificationCreateManyResumeInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => CertificationWhereUniqueInputObjectSchema),
          z.lazy(() => CertificationWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const CertificationUncheckedCreateNestedManyWithoutResumeInputObjectSchema =
  Schema;
