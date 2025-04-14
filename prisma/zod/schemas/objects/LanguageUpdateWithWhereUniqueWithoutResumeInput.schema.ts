import { z } from 'zod';
import { LanguageWhereUniqueInputObjectSchema } from './LanguageWhereUniqueInput.schema';
import { LanguageUpdateWithoutResumeInputObjectSchema } from './LanguageUpdateWithoutResumeInput.schema';
import { LanguageUncheckedUpdateWithoutResumeInputObjectSchema } from './LanguageUncheckedUpdateWithoutResumeInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LanguageUpdateWithWhereUniqueWithoutResumeInput> =
  z
    .object({
      where: z.lazy(() => LanguageWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => LanguageUpdateWithoutResumeInputObjectSchema),
        z.lazy(() => LanguageUncheckedUpdateWithoutResumeInputObjectSchema),
      ]),
    })
    .strict();

export const LanguageUpdateWithWhereUniqueWithoutResumeInputObjectSchema =
  Schema;
