import { z } from 'zod';
import { LanguageWhereUniqueInputObjectSchema } from './LanguageWhereUniqueInput.schema';
import { LanguageUpdateWithoutResumeInputObjectSchema } from './LanguageUpdateWithoutResumeInput.schema';
import { LanguageUncheckedUpdateWithoutResumeInputObjectSchema } from './LanguageUncheckedUpdateWithoutResumeInput.schema';
import { LanguageCreateWithoutResumeInputObjectSchema } from './LanguageCreateWithoutResumeInput.schema';
import { LanguageUncheckedCreateWithoutResumeInputObjectSchema } from './LanguageUncheckedCreateWithoutResumeInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LanguageUpsertWithWhereUniqueWithoutResumeInput> =
  z
    .object({
      where: z.lazy(() => LanguageWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => LanguageUpdateWithoutResumeInputObjectSchema),
        z.lazy(() => LanguageUncheckedUpdateWithoutResumeInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => LanguageCreateWithoutResumeInputObjectSchema),
        z.lazy(() => LanguageUncheckedCreateWithoutResumeInputObjectSchema),
      ]),
    })
    .strict();

export const LanguageUpsertWithWhereUniqueWithoutResumeInputObjectSchema =
  Schema;
