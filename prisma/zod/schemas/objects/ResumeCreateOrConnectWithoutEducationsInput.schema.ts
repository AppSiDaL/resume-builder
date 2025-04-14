import { z } from 'zod';
import { ResumeWhereUniqueInputObjectSchema } from './ResumeWhereUniqueInput.schema';
import { ResumeCreateWithoutEducationsInputObjectSchema } from './ResumeCreateWithoutEducationsInput.schema';
import { ResumeUncheckedCreateWithoutEducationsInputObjectSchema } from './ResumeUncheckedCreateWithoutEducationsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ResumeCreateOrConnectWithoutEducationsInput> = z
  .object({
    where: z.lazy(() => ResumeWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ResumeCreateWithoutEducationsInputObjectSchema),
      z.lazy(() => ResumeUncheckedCreateWithoutEducationsInputObjectSchema),
    ]),
  })
  .strict();

export const ResumeCreateOrConnectWithoutEducationsInputObjectSchema = Schema;
