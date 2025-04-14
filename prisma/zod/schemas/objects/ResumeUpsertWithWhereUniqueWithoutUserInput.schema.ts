import { z } from 'zod';
import { ResumeWhereUniqueInputObjectSchema } from './ResumeWhereUniqueInput.schema';
import { ResumeUpdateWithoutUserInputObjectSchema } from './ResumeUpdateWithoutUserInput.schema';
import { ResumeUncheckedUpdateWithoutUserInputObjectSchema } from './ResumeUncheckedUpdateWithoutUserInput.schema';
import { ResumeCreateWithoutUserInputObjectSchema } from './ResumeCreateWithoutUserInput.schema';
import { ResumeUncheckedCreateWithoutUserInputObjectSchema } from './ResumeUncheckedCreateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ResumeUpsertWithWhereUniqueWithoutUserInput> = z
  .object({
    where: z.lazy(() => ResumeWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => ResumeUpdateWithoutUserInputObjectSchema),
      z.lazy(() => ResumeUncheckedUpdateWithoutUserInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => ResumeCreateWithoutUserInputObjectSchema),
      z.lazy(() => ResumeUncheckedCreateWithoutUserInputObjectSchema),
    ]),
  })
  .strict();

export const ResumeUpsertWithWhereUniqueWithoutUserInputObjectSchema = Schema;
