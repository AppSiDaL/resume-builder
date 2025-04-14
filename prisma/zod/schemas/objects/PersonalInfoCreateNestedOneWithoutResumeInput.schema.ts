import { z } from 'zod';
import { PersonalInfoCreateWithoutResumeInputObjectSchema } from './PersonalInfoCreateWithoutResumeInput.schema';
import { PersonalInfoUncheckedCreateWithoutResumeInputObjectSchema } from './PersonalInfoUncheckedCreateWithoutResumeInput.schema';
import { PersonalInfoCreateOrConnectWithoutResumeInputObjectSchema } from './PersonalInfoCreateOrConnectWithoutResumeInput.schema';
import { PersonalInfoWhereUniqueInputObjectSchema } from './PersonalInfoWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PersonalInfoCreateNestedOneWithoutResumeInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => PersonalInfoCreateWithoutResumeInputObjectSchema),
          z.lazy(
            () => PersonalInfoUncheckedCreateWithoutResumeInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => PersonalInfoCreateOrConnectWithoutResumeInputObjectSchema)
        .optional(),
      connect: z
        .lazy(() => PersonalInfoWhereUniqueInputObjectSchema)
        .optional(),
    })
    .strict();

export const PersonalInfoCreateNestedOneWithoutResumeInputObjectSchema = Schema;
