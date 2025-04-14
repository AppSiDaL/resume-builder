import { z } from 'zod';
import { ResumeUpdateWithoutPersonalInfoInputObjectSchema } from './ResumeUpdateWithoutPersonalInfoInput.schema';
import { ResumeUncheckedUpdateWithoutPersonalInfoInputObjectSchema } from './ResumeUncheckedUpdateWithoutPersonalInfoInput.schema';
import { ResumeCreateWithoutPersonalInfoInputObjectSchema } from './ResumeCreateWithoutPersonalInfoInput.schema';
import { ResumeUncheckedCreateWithoutPersonalInfoInputObjectSchema } from './ResumeUncheckedCreateWithoutPersonalInfoInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ResumeUpsertWithoutPersonalInfoInput> = z
  .object({
    update: z.union([
      z.lazy(() => ResumeUpdateWithoutPersonalInfoInputObjectSchema),
      z.lazy(() => ResumeUncheckedUpdateWithoutPersonalInfoInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => ResumeCreateWithoutPersonalInfoInputObjectSchema),
      z.lazy(() => ResumeUncheckedCreateWithoutPersonalInfoInputObjectSchema),
    ]),
  })
  .strict();

export const ResumeUpsertWithoutPersonalInfoInputObjectSchema = Schema;
