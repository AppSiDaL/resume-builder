import { z } from 'zod';
import { LanguageCreateWithoutResumeInputObjectSchema } from './LanguageCreateWithoutResumeInput.schema';
import { LanguageUncheckedCreateWithoutResumeInputObjectSchema } from './LanguageUncheckedCreateWithoutResumeInput.schema';
import { LanguageCreateOrConnectWithoutResumeInputObjectSchema } from './LanguageCreateOrConnectWithoutResumeInput.schema';
import { LanguageUpsertWithWhereUniqueWithoutResumeInputObjectSchema } from './LanguageUpsertWithWhereUniqueWithoutResumeInput.schema';
import { LanguageCreateManyResumeInputEnvelopeObjectSchema } from './LanguageCreateManyResumeInputEnvelope.schema';
import { LanguageWhereUniqueInputObjectSchema } from './LanguageWhereUniqueInput.schema';
import { LanguageUpdateWithWhereUniqueWithoutResumeInputObjectSchema } from './LanguageUpdateWithWhereUniqueWithoutResumeInput.schema';
import { LanguageUpdateManyWithWhereWithoutResumeInputObjectSchema } from './LanguageUpdateManyWithWhereWithoutResumeInput.schema';
import { LanguageScalarWhereInputObjectSchema } from './LanguageScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LanguageUncheckedUpdateManyWithoutResumeNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => LanguageCreateWithoutResumeInputObjectSchema),
          z.lazy(() => LanguageCreateWithoutResumeInputObjectSchema).array(),
          z.lazy(() => LanguageUncheckedCreateWithoutResumeInputObjectSchema),
          z
            .lazy(() => LanguageUncheckedCreateWithoutResumeInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => LanguageCreateOrConnectWithoutResumeInputObjectSchema),
          z
            .lazy(() => LanguageCreateOrConnectWithoutResumeInputObjectSchema)
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () => LanguageUpsertWithWhereUniqueWithoutResumeInputObjectSchema,
          ),
          z
            .lazy(
              () => LanguageUpsertWithWhereUniqueWithoutResumeInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => LanguageCreateManyResumeInputEnvelopeObjectSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => LanguageWhereUniqueInputObjectSchema),
          z.lazy(() => LanguageWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => LanguageWhereUniqueInputObjectSchema),
          z.lazy(() => LanguageWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => LanguageWhereUniqueInputObjectSchema),
          z.lazy(() => LanguageWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => LanguageWhereUniqueInputObjectSchema),
          z.lazy(() => LanguageWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () => LanguageUpdateWithWhereUniqueWithoutResumeInputObjectSchema,
          ),
          z
            .lazy(
              () => LanguageUpdateWithWhereUniqueWithoutResumeInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () => LanguageUpdateManyWithWhereWithoutResumeInputObjectSchema,
          ),
          z
            .lazy(
              () => LanguageUpdateManyWithWhereWithoutResumeInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => LanguageScalarWhereInputObjectSchema),
          z.lazy(() => LanguageScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const LanguageUncheckedUpdateManyWithoutResumeNestedInputObjectSchema =
  Schema;
