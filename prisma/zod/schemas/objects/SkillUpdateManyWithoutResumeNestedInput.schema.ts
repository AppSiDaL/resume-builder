import { z } from 'zod';
import { SkillCreateWithoutResumeInputObjectSchema } from './SkillCreateWithoutResumeInput.schema';
import { SkillUncheckedCreateWithoutResumeInputObjectSchema } from './SkillUncheckedCreateWithoutResumeInput.schema';
import { SkillCreateOrConnectWithoutResumeInputObjectSchema } from './SkillCreateOrConnectWithoutResumeInput.schema';
import { SkillUpsertWithWhereUniqueWithoutResumeInputObjectSchema } from './SkillUpsertWithWhereUniqueWithoutResumeInput.schema';
import { SkillCreateManyResumeInputEnvelopeObjectSchema } from './SkillCreateManyResumeInputEnvelope.schema';
import { SkillWhereUniqueInputObjectSchema } from './SkillWhereUniqueInput.schema';
import { SkillUpdateWithWhereUniqueWithoutResumeInputObjectSchema } from './SkillUpdateWithWhereUniqueWithoutResumeInput.schema';
import { SkillUpdateManyWithWhereWithoutResumeInputObjectSchema } from './SkillUpdateManyWithWhereWithoutResumeInput.schema';
import { SkillScalarWhereInputObjectSchema } from './SkillScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SkillUpdateManyWithoutResumeNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => SkillCreateWithoutResumeInputObjectSchema),
        z.lazy(() => SkillCreateWithoutResumeInputObjectSchema).array(),
        z.lazy(() => SkillUncheckedCreateWithoutResumeInputObjectSchema),
        z
          .lazy(() => SkillUncheckedCreateWithoutResumeInputObjectSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => SkillCreateOrConnectWithoutResumeInputObjectSchema),
        z
          .lazy(() => SkillCreateOrConnectWithoutResumeInputObjectSchema)
          .array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(() => SkillUpsertWithWhereUniqueWithoutResumeInputObjectSchema),
        z
          .lazy(() => SkillUpsertWithWhereUniqueWithoutResumeInputObjectSchema)
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => SkillCreateManyResumeInputEnvelopeObjectSchema)
      .optional(),
    set: z
      .union([
        z.lazy(() => SkillWhereUniqueInputObjectSchema),
        z.lazy(() => SkillWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    disconnect: z
      .union([
        z.lazy(() => SkillWhereUniqueInputObjectSchema),
        z.lazy(() => SkillWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    delete: z
      .union([
        z.lazy(() => SkillWhereUniqueInputObjectSchema),
        z.lazy(() => SkillWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => SkillWhereUniqueInputObjectSchema),
        z.lazy(() => SkillWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    update: z
      .union([
        z.lazy(() => SkillUpdateWithWhereUniqueWithoutResumeInputObjectSchema),
        z
          .lazy(() => SkillUpdateWithWhereUniqueWithoutResumeInputObjectSchema)
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => SkillUpdateManyWithWhereWithoutResumeInputObjectSchema),
        z
          .lazy(() => SkillUpdateManyWithWhereWithoutResumeInputObjectSchema)
          .array(),
      ])
      .optional(),
    deleteMany: z
      .union([
        z.lazy(() => SkillScalarWhereInputObjectSchema),
        z.lazy(() => SkillScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const SkillUpdateManyWithoutResumeNestedInputObjectSchema = Schema;
