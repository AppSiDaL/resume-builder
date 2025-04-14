import { z } from 'zod';
import { ResumeWhereUniqueInputObjectSchema } from './ResumeWhereUniqueInput.schema';
import { ResumeCreateWithoutUserInputObjectSchema } from './ResumeCreateWithoutUserInput.schema';
import { ResumeUncheckedCreateWithoutUserInputObjectSchema } from './ResumeUncheckedCreateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ResumeCreateOrConnectWithoutUserInput> = z
  .object({
    where: z.lazy(() => ResumeWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ResumeCreateWithoutUserInputObjectSchema),
      z.lazy(() => ResumeUncheckedCreateWithoutUserInputObjectSchema),
    ]),
  })
  .strict();

export const ResumeCreateOrConnectWithoutUserInputObjectSchema = Schema;
