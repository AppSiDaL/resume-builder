import { z } from 'zod';
import { ResumeUpdateWithoutEducationsInputObjectSchema } from './ResumeUpdateWithoutEducationsInput.schema';
import { ResumeUncheckedUpdateWithoutEducationsInputObjectSchema } from './ResumeUncheckedUpdateWithoutEducationsInput.schema';
import { ResumeCreateWithoutEducationsInputObjectSchema } from './ResumeCreateWithoutEducationsInput.schema';
import { ResumeUncheckedCreateWithoutEducationsInputObjectSchema } from './ResumeUncheckedCreateWithoutEducationsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ResumeUpsertWithoutEducationsInput> = z
  .object({
    update: z.union([
      z.lazy(() => ResumeUpdateWithoutEducationsInputObjectSchema),
      z.lazy(() => ResumeUncheckedUpdateWithoutEducationsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => ResumeCreateWithoutEducationsInputObjectSchema),
      z.lazy(() => ResumeUncheckedCreateWithoutEducationsInputObjectSchema),
    ]),
  })
  .strict();

export const ResumeUpsertWithoutEducationsInputObjectSchema = Schema;
