import { z } from 'zod';
import { PersonalInfoUpdateWithoutResumeInputObjectSchema } from './PersonalInfoUpdateWithoutResumeInput.schema';
import { PersonalInfoUncheckedUpdateWithoutResumeInputObjectSchema } from './PersonalInfoUncheckedUpdateWithoutResumeInput.schema';
import { PersonalInfoCreateWithoutResumeInputObjectSchema } from './PersonalInfoCreateWithoutResumeInput.schema';
import { PersonalInfoUncheckedCreateWithoutResumeInputObjectSchema } from './PersonalInfoUncheckedCreateWithoutResumeInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PersonalInfoUpsertWithoutResumeInput> = z
  .object({
    update: z.union([
      z.lazy(() => PersonalInfoUpdateWithoutResumeInputObjectSchema),
      z.lazy(() => PersonalInfoUncheckedUpdateWithoutResumeInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => PersonalInfoCreateWithoutResumeInputObjectSchema),
      z.lazy(() => PersonalInfoUncheckedCreateWithoutResumeInputObjectSchema),
    ]),
  })
  .strict();

export const PersonalInfoUpsertWithoutResumeInputObjectSchema = Schema;
