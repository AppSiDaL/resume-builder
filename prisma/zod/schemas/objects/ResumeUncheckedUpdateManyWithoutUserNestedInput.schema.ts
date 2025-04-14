import { z } from 'zod';
import { ResumeCreateWithoutUserInputObjectSchema } from './ResumeCreateWithoutUserInput.schema';
import { ResumeUncheckedCreateWithoutUserInputObjectSchema } from './ResumeUncheckedCreateWithoutUserInput.schema';
import { ResumeCreateOrConnectWithoutUserInputObjectSchema } from './ResumeCreateOrConnectWithoutUserInput.schema';
import { ResumeUpsertWithWhereUniqueWithoutUserInputObjectSchema } from './ResumeUpsertWithWhereUniqueWithoutUserInput.schema';
import { ResumeCreateManyUserInputEnvelopeObjectSchema } from './ResumeCreateManyUserInputEnvelope.schema';
import { ResumeWhereUniqueInputObjectSchema } from './ResumeWhereUniqueInput.schema';
import { ResumeUpdateWithWhereUniqueWithoutUserInputObjectSchema } from './ResumeUpdateWithWhereUniqueWithoutUserInput.schema';
import { ResumeUpdateManyWithWhereWithoutUserInputObjectSchema } from './ResumeUpdateManyWithWhereWithoutUserInput.schema';
import { ResumeScalarWhereInputObjectSchema } from './ResumeScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ResumeUncheckedUpdateManyWithoutUserNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ResumeCreateWithoutUserInputObjectSchema),
          z.lazy(() => ResumeCreateWithoutUserInputObjectSchema).array(),
          z.lazy(() => ResumeUncheckedCreateWithoutUserInputObjectSchema),
          z
            .lazy(() => ResumeUncheckedCreateWithoutUserInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => ResumeCreateOrConnectWithoutUserInputObjectSchema),
          z
            .lazy(() => ResumeCreateOrConnectWithoutUserInputObjectSchema)
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(() => ResumeUpsertWithWhereUniqueWithoutUserInputObjectSchema),
          z
            .lazy(() => ResumeUpsertWithWhereUniqueWithoutUserInputObjectSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => ResumeCreateManyUserInputEnvelopeObjectSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => ResumeWhereUniqueInputObjectSchema),
          z.lazy(() => ResumeWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => ResumeWhereUniqueInputObjectSchema),
          z.lazy(() => ResumeWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => ResumeWhereUniqueInputObjectSchema),
          z.lazy(() => ResumeWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => ResumeWhereUniqueInputObjectSchema),
          z.lazy(() => ResumeWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(() => ResumeUpdateWithWhereUniqueWithoutUserInputObjectSchema),
          z
            .lazy(() => ResumeUpdateWithWhereUniqueWithoutUserInputObjectSchema)
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => ResumeUpdateManyWithWhereWithoutUserInputObjectSchema),
          z
            .lazy(() => ResumeUpdateManyWithWhereWithoutUserInputObjectSchema)
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => ResumeScalarWhereInputObjectSchema),
          z.lazy(() => ResumeScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const ResumeUncheckedUpdateManyWithoutUserNestedInputObjectSchema =
  Schema;
