import { z } from 'zod';
import { LanguageWhereUniqueInputObjectSchema } from './LanguageWhereUniqueInput.schema';
import { LanguageCreateWithoutResumeInputObjectSchema } from './LanguageCreateWithoutResumeInput.schema';
import { LanguageUncheckedCreateWithoutResumeInputObjectSchema } from './LanguageUncheckedCreateWithoutResumeInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LanguageCreateOrConnectWithoutResumeInput> = z
  .object({
    where: z.lazy(() => LanguageWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => LanguageCreateWithoutResumeInputObjectSchema),
      z.lazy(() => LanguageUncheckedCreateWithoutResumeInputObjectSchema),
    ]),
  })
  .strict();

export const LanguageCreateOrConnectWithoutResumeInputObjectSchema = Schema;
