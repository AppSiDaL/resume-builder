import { z } from 'zod';
import { ProjectCreateWithoutResumeInputObjectSchema } from './ProjectCreateWithoutResumeInput.schema';
import { ProjectUncheckedCreateWithoutResumeInputObjectSchema } from './ProjectUncheckedCreateWithoutResumeInput.schema';
import { ProjectCreateOrConnectWithoutResumeInputObjectSchema } from './ProjectCreateOrConnectWithoutResumeInput.schema';
import { ProjectUpsertWithWhereUniqueWithoutResumeInputObjectSchema } from './ProjectUpsertWithWhereUniqueWithoutResumeInput.schema';
import { ProjectCreateManyResumeInputEnvelopeObjectSchema } from './ProjectCreateManyResumeInputEnvelope.schema';
import { ProjectWhereUniqueInputObjectSchema } from './ProjectWhereUniqueInput.schema';
import { ProjectUpdateWithWhereUniqueWithoutResumeInputObjectSchema } from './ProjectUpdateWithWhereUniqueWithoutResumeInput.schema';
import { ProjectUpdateManyWithWhereWithoutResumeInputObjectSchema } from './ProjectUpdateManyWithWhereWithoutResumeInput.schema';
import { ProjectScalarWhereInputObjectSchema } from './ProjectScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProjectUncheckedUpdateManyWithoutResumeNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ProjectCreateWithoutResumeInputObjectSchema),
          z.lazy(() => ProjectCreateWithoutResumeInputObjectSchema).array(),
          z.lazy(() => ProjectUncheckedCreateWithoutResumeInputObjectSchema),
          z
            .lazy(() => ProjectUncheckedCreateWithoutResumeInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => ProjectCreateOrConnectWithoutResumeInputObjectSchema),
          z
            .lazy(() => ProjectCreateOrConnectWithoutResumeInputObjectSchema)
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () => ProjectUpsertWithWhereUniqueWithoutResumeInputObjectSchema,
          ),
          z
            .lazy(
              () => ProjectUpsertWithWhereUniqueWithoutResumeInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => ProjectCreateManyResumeInputEnvelopeObjectSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => ProjectWhereUniqueInputObjectSchema),
          z.lazy(() => ProjectWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => ProjectWhereUniqueInputObjectSchema),
          z.lazy(() => ProjectWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => ProjectWhereUniqueInputObjectSchema),
          z.lazy(() => ProjectWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => ProjectWhereUniqueInputObjectSchema),
          z.lazy(() => ProjectWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () => ProjectUpdateWithWhereUniqueWithoutResumeInputObjectSchema,
          ),
          z
            .lazy(
              () => ProjectUpdateWithWhereUniqueWithoutResumeInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () => ProjectUpdateManyWithWhereWithoutResumeInputObjectSchema,
          ),
          z
            .lazy(
              () => ProjectUpdateManyWithWhereWithoutResumeInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => ProjectScalarWhereInputObjectSchema),
          z.lazy(() => ProjectScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const ProjectUncheckedUpdateManyWithoutResumeNestedInputObjectSchema =
  Schema;
