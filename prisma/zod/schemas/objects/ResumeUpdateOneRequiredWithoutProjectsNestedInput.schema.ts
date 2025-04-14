import { z } from 'zod';
import { ResumeCreateWithoutProjectsInputObjectSchema } from './ResumeCreateWithoutProjectsInput.schema';
import { ResumeUncheckedCreateWithoutProjectsInputObjectSchema } from './ResumeUncheckedCreateWithoutProjectsInput.schema';
import { ResumeCreateOrConnectWithoutProjectsInputObjectSchema } from './ResumeCreateOrConnectWithoutProjectsInput.schema';
import { ResumeUpsertWithoutProjectsInputObjectSchema } from './ResumeUpsertWithoutProjectsInput.schema';
import { ResumeWhereUniqueInputObjectSchema } from './ResumeWhereUniqueInput.schema';
import { ResumeUpdateWithoutProjectsInputObjectSchema } from './ResumeUpdateWithoutProjectsInput.schema';
import { ResumeUncheckedUpdateWithoutProjectsInputObjectSchema } from './ResumeUncheckedUpdateWithoutProjectsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ResumeUpdateOneRequiredWithoutProjectsNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ResumeCreateWithoutProjectsInputObjectSchema),
          z.lazy(() => ResumeUncheckedCreateWithoutProjectsInputObjectSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => ResumeCreateOrConnectWithoutProjectsInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => ResumeUpsertWithoutProjectsInputObjectSchema)
        .optional(),
      connect: z.lazy(() => ResumeWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => ResumeUpdateWithoutProjectsInputObjectSchema),
          z.lazy(() => ResumeUncheckedUpdateWithoutProjectsInputObjectSchema),
        ])
        .optional(),
    })
    .strict();

export const ResumeUpdateOneRequiredWithoutProjectsNestedInputObjectSchema =
  Schema;
