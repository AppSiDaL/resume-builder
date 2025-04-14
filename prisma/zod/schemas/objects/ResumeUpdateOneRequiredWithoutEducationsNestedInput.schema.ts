import { z } from 'zod';
import { ResumeCreateWithoutEducationsInputObjectSchema } from './ResumeCreateWithoutEducationsInput.schema';
import { ResumeUncheckedCreateWithoutEducationsInputObjectSchema } from './ResumeUncheckedCreateWithoutEducationsInput.schema';
import { ResumeCreateOrConnectWithoutEducationsInputObjectSchema } from './ResumeCreateOrConnectWithoutEducationsInput.schema';
import { ResumeUpsertWithoutEducationsInputObjectSchema } from './ResumeUpsertWithoutEducationsInput.schema';
import { ResumeWhereUniqueInputObjectSchema } from './ResumeWhereUniqueInput.schema';
import { ResumeUpdateWithoutEducationsInputObjectSchema } from './ResumeUpdateWithoutEducationsInput.schema';
import { ResumeUncheckedUpdateWithoutEducationsInputObjectSchema } from './ResumeUncheckedUpdateWithoutEducationsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ResumeUpdateOneRequiredWithoutEducationsNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ResumeCreateWithoutEducationsInputObjectSchema),
          z.lazy(() => ResumeUncheckedCreateWithoutEducationsInputObjectSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => ResumeCreateOrConnectWithoutEducationsInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => ResumeUpsertWithoutEducationsInputObjectSchema)
        .optional(),
      connect: z.lazy(() => ResumeWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => ResumeUpdateWithoutEducationsInputObjectSchema),
          z.lazy(() => ResumeUncheckedUpdateWithoutEducationsInputObjectSchema),
        ])
        .optional(),
    })
    .strict();

export const ResumeUpdateOneRequiredWithoutEducationsNestedInputObjectSchema =
  Schema;
