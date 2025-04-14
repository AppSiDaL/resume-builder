import { z } from 'zod';
import { EducationCreateWithoutResumeInputObjectSchema } from './EducationCreateWithoutResumeInput.schema';
import { EducationUncheckedCreateWithoutResumeInputObjectSchema } from './EducationUncheckedCreateWithoutResumeInput.schema';
import { EducationCreateOrConnectWithoutResumeInputObjectSchema } from './EducationCreateOrConnectWithoutResumeInput.schema';
import { EducationUpsertWithWhereUniqueWithoutResumeInputObjectSchema } from './EducationUpsertWithWhereUniqueWithoutResumeInput.schema';
import { EducationCreateManyResumeInputEnvelopeObjectSchema } from './EducationCreateManyResumeInputEnvelope.schema';
import { EducationWhereUniqueInputObjectSchema } from './EducationWhereUniqueInput.schema';
import { EducationUpdateWithWhereUniqueWithoutResumeInputObjectSchema } from './EducationUpdateWithWhereUniqueWithoutResumeInput.schema';
import { EducationUpdateManyWithWhereWithoutResumeInputObjectSchema } from './EducationUpdateManyWithWhereWithoutResumeInput.schema';
import { EducationScalarWhereInputObjectSchema } from './EducationScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EducationUpdateManyWithoutResumeNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => EducationCreateWithoutResumeInputObjectSchema),
        z.lazy(() => EducationCreateWithoutResumeInputObjectSchema).array(),
        z.lazy(() => EducationUncheckedCreateWithoutResumeInputObjectSchema),
        z
          .lazy(() => EducationUncheckedCreateWithoutResumeInputObjectSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => EducationCreateOrConnectWithoutResumeInputObjectSchema),
        z
          .lazy(() => EducationCreateOrConnectWithoutResumeInputObjectSchema)
          .array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(
          () => EducationUpsertWithWhereUniqueWithoutResumeInputObjectSchema,
        ),
        z
          .lazy(
            () => EducationUpsertWithWhereUniqueWithoutResumeInputObjectSchema,
          )
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => EducationCreateManyResumeInputEnvelopeObjectSchema)
      .optional(),
    set: z
      .union([
        z.lazy(() => EducationWhereUniqueInputObjectSchema),
        z.lazy(() => EducationWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    disconnect: z
      .union([
        z.lazy(() => EducationWhereUniqueInputObjectSchema),
        z.lazy(() => EducationWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    delete: z
      .union([
        z.lazy(() => EducationWhereUniqueInputObjectSchema),
        z.lazy(() => EducationWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => EducationWhereUniqueInputObjectSchema),
        z.lazy(() => EducationWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    update: z
      .union([
        z.lazy(
          () => EducationUpdateWithWhereUniqueWithoutResumeInputObjectSchema,
        ),
        z
          .lazy(
            () => EducationUpdateWithWhereUniqueWithoutResumeInputObjectSchema,
          )
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(
          () => EducationUpdateManyWithWhereWithoutResumeInputObjectSchema,
        ),
        z
          .lazy(
            () => EducationUpdateManyWithWhereWithoutResumeInputObjectSchema,
          )
          .array(),
      ])
      .optional(),
    deleteMany: z
      .union([
        z.lazy(() => EducationScalarWhereInputObjectSchema),
        z.lazy(() => EducationScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const EducationUpdateManyWithoutResumeNestedInputObjectSchema = Schema;
