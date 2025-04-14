import { z } from 'zod';
import { ResumeUpdateWithoutReferencesInputObjectSchema } from './ResumeUpdateWithoutReferencesInput.schema';
import { ResumeUncheckedUpdateWithoutReferencesInputObjectSchema } from './ResumeUncheckedUpdateWithoutReferencesInput.schema';
import { ResumeCreateWithoutReferencesInputObjectSchema } from './ResumeCreateWithoutReferencesInput.schema';
import { ResumeUncheckedCreateWithoutReferencesInputObjectSchema } from './ResumeUncheckedCreateWithoutReferencesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ResumeUpsertWithoutReferencesInput> = z
  .object({
    update: z.union([
      z.lazy(() => ResumeUpdateWithoutReferencesInputObjectSchema),
      z.lazy(() => ResumeUncheckedUpdateWithoutReferencesInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => ResumeCreateWithoutReferencesInputObjectSchema),
      z.lazy(() => ResumeUncheckedCreateWithoutReferencesInputObjectSchema),
    ]),
  })
  .strict();

export const ResumeUpsertWithoutReferencesInputObjectSchema = Schema;
