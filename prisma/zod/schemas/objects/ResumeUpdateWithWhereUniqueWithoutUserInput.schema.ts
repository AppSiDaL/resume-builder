import { z } from 'zod';
import { ResumeWhereUniqueInputObjectSchema } from './ResumeWhereUniqueInput.schema';
import { ResumeUpdateWithoutUserInputObjectSchema } from './ResumeUpdateWithoutUserInput.schema';
import { ResumeUncheckedUpdateWithoutUserInputObjectSchema } from './ResumeUncheckedUpdateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ResumeUpdateWithWhereUniqueWithoutUserInput> = z
  .object({
    where: z.lazy(() => ResumeWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => ResumeUpdateWithoutUserInputObjectSchema),
      z.lazy(() => ResumeUncheckedUpdateWithoutUserInputObjectSchema),
    ]),
  })
  .strict();

export const ResumeUpdateWithWhereUniqueWithoutUserInputObjectSchema = Schema;
