import { z } from 'zod';
import { ResumeCreateWithoutPersonalInfoInputObjectSchema } from './ResumeCreateWithoutPersonalInfoInput.schema';
import { ResumeUncheckedCreateWithoutPersonalInfoInputObjectSchema } from './ResumeUncheckedCreateWithoutPersonalInfoInput.schema';
import { ResumeCreateOrConnectWithoutPersonalInfoInputObjectSchema } from './ResumeCreateOrConnectWithoutPersonalInfoInput.schema';
import { ResumeUpsertWithoutPersonalInfoInputObjectSchema } from './ResumeUpsertWithoutPersonalInfoInput.schema';
import { ResumeWhereUniqueInputObjectSchema } from './ResumeWhereUniqueInput.schema';
import { ResumeUpdateWithoutPersonalInfoInputObjectSchema } from './ResumeUpdateWithoutPersonalInfoInput.schema';
import { ResumeUncheckedUpdateWithoutPersonalInfoInputObjectSchema } from './ResumeUncheckedUpdateWithoutPersonalInfoInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ResumeUpdateOneRequiredWithoutPersonalInfoNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ResumeCreateWithoutPersonalInfoInputObjectSchema),
          z.lazy(
            () => ResumeUncheckedCreateWithoutPersonalInfoInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => ResumeCreateOrConnectWithoutPersonalInfoInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => ResumeUpsertWithoutPersonalInfoInputObjectSchema)
        .optional(),
      connect: z.lazy(() => ResumeWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => ResumeUpdateWithoutPersonalInfoInputObjectSchema),
          z.lazy(
            () => ResumeUncheckedUpdateWithoutPersonalInfoInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const ResumeUpdateOneRequiredWithoutPersonalInfoNestedInputObjectSchema =
  Schema;
