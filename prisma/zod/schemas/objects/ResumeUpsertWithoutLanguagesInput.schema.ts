import { z } from 'zod';
import { ResumeUpdateWithoutLanguagesInputObjectSchema } from './ResumeUpdateWithoutLanguagesInput.schema';
import { ResumeUncheckedUpdateWithoutLanguagesInputObjectSchema } from './ResumeUncheckedUpdateWithoutLanguagesInput.schema';
import { ResumeCreateWithoutLanguagesInputObjectSchema } from './ResumeCreateWithoutLanguagesInput.schema';
import { ResumeUncheckedCreateWithoutLanguagesInputObjectSchema } from './ResumeUncheckedCreateWithoutLanguagesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ResumeUpsertWithoutLanguagesInput> = z
  .object({
    update: z.union([
      z.lazy(() => ResumeUpdateWithoutLanguagesInputObjectSchema),
      z.lazy(() => ResumeUncheckedUpdateWithoutLanguagesInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => ResumeCreateWithoutLanguagesInputObjectSchema),
      z.lazy(() => ResumeUncheckedCreateWithoutLanguagesInputObjectSchema),
    ]),
  })
  .strict();

export const ResumeUpsertWithoutLanguagesInputObjectSchema = Schema;
