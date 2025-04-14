import { z } from 'zod';
import { ProjectCreateWithoutResumeInputObjectSchema } from './ProjectCreateWithoutResumeInput.schema';
import { ProjectUncheckedCreateWithoutResumeInputObjectSchema } from './ProjectUncheckedCreateWithoutResumeInput.schema';
import { ProjectCreateOrConnectWithoutResumeInputObjectSchema } from './ProjectCreateOrConnectWithoutResumeInput.schema';
import { ProjectCreateManyResumeInputEnvelopeObjectSchema } from './ProjectCreateManyResumeInputEnvelope.schema';
import { ProjectWhereUniqueInputObjectSchema } from './ProjectWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProjectUncheckedCreateNestedManyWithoutResumeInput> =
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
      createMany: z
        .lazy(() => ProjectCreateManyResumeInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => ProjectWhereUniqueInputObjectSchema),
          z.lazy(() => ProjectWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const ProjectUncheckedCreateNestedManyWithoutResumeInputObjectSchema =
  Schema;
