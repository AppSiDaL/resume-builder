import { z } from 'zod';
import { ResumeUpdateWithoutExperiencesInputObjectSchema } from './ResumeUpdateWithoutExperiencesInput.schema';
import { ResumeUncheckedUpdateWithoutExperiencesInputObjectSchema } from './ResumeUncheckedUpdateWithoutExperiencesInput.schema';
import { ResumeCreateWithoutExperiencesInputObjectSchema } from './ResumeCreateWithoutExperiencesInput.schema';
import { ResumeUncheckedCreateWithoutExperiencesInputObjectSchema } from './ResumeUncheckedCreateWithoutExperiencesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ResumeUpsertWithoutExperiencesInput> = z
  .object({
    update: z.union([
      z.lazy(() => ResumeUpdateWithoutExperiencesInputObjectSchema),
      z.lazy(() => ResumeUncheckedUpdateWithoutExperiencesInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => ResumeCreateWithoutExperiencesInputObjectSchema),
      z.lazy(() => ResumeUncheckedCreateWithoutExperiencesInputObjectSchema),
    ]),
  })
  .strict();

export const ResumeUpsertWithoutExperiencesInputObjectSchema = Schema;
