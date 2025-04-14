import { z } from 'zod';
import { ResumeWhereUniqueInputObjectSchema } from './ResumeWhereUniqueInput.schema';
import { ResumeCreateWithoutPersonalInfoInputObjectSchema } from './ResumeCreateWithoutPersonalInfoInput.schema';
import { ResumeUncheckedCreateWithoutPersonalInfoInputObjectSchema } from './ResumeUncheckedCreateWithoutPersonalInfoInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ResumeCreateOrConnectWithoutPersonalInfoInput> =
  z
    .object({
      where: z.lazy(() => ResumeWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => ResumeCreateWithoutPersonalInfoInputObjectSchema),
        z.lazy(() => ResumeUncheckedCreateWithoutPersonalInfoInputObjectSchema),
      ]),
    })
    .strict();

export const ResumeCreateOrConnectWithoutPersonalInfoInputObjectSchema = Schema;
