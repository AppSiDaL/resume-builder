import { z } from 'zod';
import { PersonalInfoWhereUniqueInputObjectSchema } from './PersonalInfoWhereUniqueInput.schema';
import { PersonalInfoCreateWithoutResumeInputObjectSchema } from './PersonalInfoCreateWithoutResumeInput.schema';
import { PersonalInfoUncheckedCreateWithoutResumeInputObjectSchema } from './PersonalInfoUncheckedCreateWithoutResumeInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PersonalInfoCreateOrConnectWithoutResumeInput> =
  z
    .object({
      where: z.lazy(() => PersonalInfoWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => PersonalInfoCreateWithoutResumeInputObjectSchema),
        z.lazy(() => PersonalInfoUncheckedCreateWithoutResumeInputObjectSchema),
      ]),
    })
    .strict();

export const PersonalInfoCreateOrConnectWithoutResumeInputObjectSchema = Schema;
