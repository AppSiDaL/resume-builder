import { z } from 'zod';
import { ResumeCreateWithoutPersonalInfoInputObjectSchema } from './ResumeCreateWithoutPersonalInfoInput.schema';
import { ResumeUncheckedCreateWithoutPersonalInfoInputObjectSchema } from './ResumeUncheckedCreateWithoutPersonalInfoInput.schema';
import { ResumeCreateOrConnectWithoutPersonalInfoInputObjectSchema } from './ResumeCreateOrConnectWithoutPersonalInfoInput.schema';
import { ResumeWhereUniqueInputObjectSchema } from './ResumeWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ResumeCreateNestedOneWithoutPersonalInfoInput> =
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
      connect: z.lazy(() => ResumeWhereUniqueInputObjectSchema).optional(),
    })
    .strict();

export const ResumeCreateNestedOneWithoutPersonalInfoInputObjectSchema = Schema;
