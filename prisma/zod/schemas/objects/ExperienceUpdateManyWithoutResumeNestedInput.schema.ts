import { z } from 'zod';
import { ExperienceCreateWithoutResumeInputObjectSchema } from './ExperienceCreateWithoutResumeInput.schema';
import { ExperienceUncheckedCreateWithoutResumeInputObjectSchema } from './ExperienceUncheckedCreateWithoutResumeInput.schema';
import { ExperienceCreateOrConnectWithoutResumeInputObjectSchema } from './ExperienceCreateOrConnectWithoutResumeInput.schema';
import { ExperienceUpsertWithWhereUniqueWithoutResumeInputObjectSchema } from './ExperienceUpsertWithWhereUniqueWithoutResumeInput.schema';
import { ExperienceCreateManyResumeInputEnvelopeObjectSchema } from './ExperienceCreateManyResumeInputEnvelope.schema';
import { ExperienceWhereUniqueInputObjectSchema } from './ExperienceWhereUniqueInput.schema';
import { ExperienceUpdateWithWhereUniqueWithoutResumeInputObjectSchema } from './ExperienceUpdateWithWhereUniqueWithoutResumeInput.schema';
import { ExperienceUpdateManyWithWhereWithoutResumeInputObjectSchema } from './ExperienceUpdateManyWithWhereWithoutResumeInput.schema';
import { ExperienceScalarWhereInputObjectSchema } from './ExperienceScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExperienceUpdateManyWithoutResumeNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => ExperienceCreateWithoutResumeInputObjectSchema),
        z.lazy(() => ExperienceCreateWithoutResumeInputObjectSchema).array(),
        z.lazy(() => ExperienceUncheckedCreateWithoutResumeInputObjectSchema),
        z
          .lazy(() => ExperienceUncheckedCreateWithoutResumeInputObjectSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => ExperienceCreateOrConnectWithoutResumeInputObjectSchema),
        z
          .lazy(() => ExperienceCreateOrConnectWithoutResumeInputObjectSchema)
          .array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(
          () => ExperienceUpsertWithWhereUniqueWithoutResumeInputObjectSchema,
        ),
        z
          .lazy(
            () => ExperienceUpsertWithWhereUniqueWithoutResumeInputObjectSchema,
          )
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => ExperienceCreateManyResumeInputEnvelopeObjectSchema)
      .optional(),
    set: z
      .union([
        z.lazy(() => ExperienceWhereUniqueInputObjectSchema),
        z.lazy(() => ExperienceWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    disconnect: z
      .union([
        z.lazy(() => ExperienceWhereUniqueInputObjectSchema),
        z.lazy(() => ExperienceWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    delete: z
      .union([
        z.lazy(() => ExperienceWhereUniqueInputObjectSchema),
        z.lazy(() => ExperienceWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => ExperienceWhereUniqueInputObjectSchema),
        z.lazy(() => ExperienceWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    update: z
      .union([
        z.lazy(
          () => ExperienceUpdateWithWhereUniqueWithoutResumeInputObjectSchema,
        ),
        z
          .lazy(
            () => ExperienceUpdateWithWhereUniqueWithoutResumeInputObjectSchema,
          )
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(
          () => ExperienceUpdateManyWithWhereWithoutResumeInputObjectSchema,
        ),
        z
          .lazy(
            () => ExperienceUpdateManyWithWhereWithoutResumeInputObjectSchema,
          )
          .array(),
      ])
      .optional(),
    deleteMany: z
      .union([
        z.lazy(() => ExperienceScalarWhereInputObjectSchema),
        z.lazy(() => ExperienceScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const ExperienceUpdateManyWithoutResumeNestedInputObjectSchema = Schema;
