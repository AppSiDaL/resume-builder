import { z } from 'zod';
import { ReferenceCreateWithoutResumeInputObjectSchema } from './ReferenceCreateWithoutResumeInput.schema';
import { ReferenceUncheckedCreateWithoutResumeInputObjectSchema } from './ReferenceUncheckedCreateWithoutResumeInput.schema';
import { ReferenceCreateOrConnectWithoutResumeInputObjectSchema } from './ReferenceCreateOrConnectWithoutResumeInput.schema';
import { ReferenceUpsertWithWhereUniqueWithoutResumeInputObjectSchema } from './ReferenceUpsertWithWhereUniqueWithoutResumeInput.schema';
import { ReferenceCreateManyResumeInputEnvelopeObjectSchema } from './ReferenceCreateManyResumeInputEnvelope.schema';
import { ReferenceWhereUniqueInputObjectSchema } from './ReferenceWhereUniqueInput.schema';
import { ReferenceUpdateWithWhereUniqueWithoutResumeInputObjectSchema } from './ReferenceUpdateWithWhereUniqueWithoutResumeInput.schema';
import { ReferenceUpdateManyWithWhereWithoutResumeInputObjectSchema } from './ReferenceUpdateManyWithWhereWithoutResumeInput.schema';
import { ReferenceScalarWhereInputObjectSchema } from './ReferenceScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReferenceUpdateManyWithoutResumeNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => ReferenceCreateWithoutResumeInputObjectSchema),
        z.lazy(() => ReferenceCreateWithoutResumeInputObjectSchema).array(),
        z.lazy(() => ReferenceUncheckedCreateWithoutResumeInputObjectSchema),
        z
          .lazy(() => ReferenceUncheckedCreateWithoutResumeInputObjectSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => ReferenceCreateOrConnectWithoutResumeInputObjectSchema),
        z
          .lazy(() => ReferenceCreateOrConnectWithoutResumeInputObjectSchema)
          .array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(
          () => ReferenceUpsertWithWhereUniqueWithoutResumeInputObjectSchema,
        ),
        z
          .lazy(
            () => ReferenceUpsertWithWhereUniqueWithoutResumeInputObjectSchema,
          )
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => ReferenceCreateManyResumeInputEnvelopeObjectSchema)
      .optional(),
    set: z
      .union([
        z.lazy(() => ReferenceWhereUniqueInputObjectSchema),
        z.lazy(() => ReferenceWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    disconnect: z
      .union([
        z.lazy(() => ReferenceWhereUniqueInputObjectSchema),
        z.lazy(() => ReferenceWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    delete: z
      .union([
        z.lazy(() => ReferenceWhereUniqueInputObjectSchema),
        z.lazy(() => ReferenceWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => ReferenceWhereUniqueInputObjectSchema),
        z.lazy(() => ReferenceWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    update: z
      .union([
        z.lazy(
          () => ReferenceUpdateWithWhereUniqueWithoutResumeInputObjectSchema,
        ),
        z
          .lazy(
            () => ReferenceUpdateWithWhereUniqueWithoutResumeInputObjectSchema,
          )
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(
          () => ReferenceUpdateManyWithWhereWithoutResumeInputObjectSchema,
        ),
        z
          .lazy(
            () => ReferenceUpdateManyWithWhereWithoutResumeInputObjectSchema,
          )
          .array(),
      ])
      .optional(),
    deleteMany: z
      .union([
        z.lazy(() => ReferenceScalarWhereInputObjectSchema),
        z.lazy(() => ReferenceScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const ReferenceUpdateManyWithoutResumeNestedInputObjectSchema = Schema;
