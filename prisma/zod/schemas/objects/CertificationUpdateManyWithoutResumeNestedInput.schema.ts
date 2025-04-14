import { z } from 'zod';
import { CertificationCreateWithoutResumeInputObjectSchema } from './CertificationCreateWithoutResumeInput.schema';
import { CertificationUncheckedCreateWithoutResumeInputObjectSchema } from './CertificationUncheckedCreateWithoutResumeInput.schema';
import { CertificationCreateOrConnectWithoutResumeInputObjectSchema } from './CertificationCreateOrConnectWithoutResumeInput.schema';
import { CertificationUpsertWithWhereUniqueWithoutResumeInputObjectSchema } from './CertificationUpsertWithWhereUniqueWithoutResumeInput.schema';
import { CertificationCreateManyResumeInputEnvelopeObjectSchema } from './CertificationCreateManyResumeInputEnvelope.schema';
import { CertificationWhereUniqueInputObjectSchema } from './CertificationWhereUniqueInput.schema';
import { CertificationUpdateWithWhereUniqueWithoutResumeInputObjectSchema } from './CertificationUpdateWithWhereUniqueWithoutResumeInput.schema';
import { CertificationUpdateManyWithWhereWithoutResumeInputObjectSchema } from './CertificationUpdateManyWithWhereWithoutResumeInput.schema';
import { CertificationScalarWhereInputObjectSchema } from './CertificationScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CertificationUpdateManyWithoutResumeNestedInput> =
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
      upsert: z
        .union([
          z.lazy(
            () =>
              CertificationUpsertWithWhereUniqueWithoutResumeInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                CertificationUpsertWithWhereUniqueWithoutResumeInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => CertificationCreateManyResumeInputEnvelopeObjectSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => CertificationWhereUniqueInputObjectSchema),
          z.lazy(() => CertificationWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => CertificationWhereUniqueInputObjectSchema),
          z.lazy(() => CertificationWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => CertificationWhereUniqueInputObjectSchema),
          z.lazy(() => CertificationWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => CertificationWhereUniqueInputObjectSchema),
          z.lazy(() => CertificationWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              CertificationUpdateWithWhereUniqueWithoutResumeInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                CertificationUpdateWithWhereUniqueWithoutResumeInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              CertificationUpdateManyWithWhereWithoutResumeInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                CertificationUpdateManyWithWhereWithoutResumeInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => CertificationScalarWhereInputObjectSchema),
          z.lazy(() => CertificationScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const CertificationUpdateManyWithoutResumeNestedInputObjectSchema =
  Schema;
