import { z } from 'zod';
import { PersonalInfoCreateWithoutResumeInputObjectSchema } from './PersonalInfoCreateWithoutResumeInput.schema';
import { PersonalInfoUncheckedCreateWithoutResumeInputObjectSchema } from './PersonalInfoUncheckedCreateWithoutResumeInput.schema';
import { PersonalInfoCreateOrConnectWithoutResumeInputObjectSchema } from './PersonalInfoCreateOrConnectWithoutResumeInput.schema';
import { PersonalInfoUpsertWithoutResumeInputObjectSchema } from './PersonalInfoUpsertWithoutResumeInput.schema';
import { PersonalInfoWhereUniqueInputObjectSchema } from './PersonalInfoWhereUniqueInput.schema';
import { PersonalInfoUpdateWithoutResumeInputObjectSchema } from './PersonalInfoUpdateWithoutResumeInput.schema';
import { PersonalInfoUncheckedUpdateWithoutResumeInputObjectSchema } from './PersonalInfoUncheckedUpdateWithoutResumeInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PersonalInfoUpdateOneWithoutResumeNestedInput> =
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
      upsert: z
        .lazy(() => PersonalInfoUpsertWithoutResumeInputObjectSchema)
        .optional(),
      disconnect: z.boolean().optional(),
      delete: z.boolean().optional(),
      connect: z
        .lazy(() => PersonalInfoWhereUniqueInputObjectSchema)
        .optional(),
      update: z
        .union([
          z.lazy(() => PersonalInfoUpdateWithoutResumeInputObjectSchema),
          z.lazy(
            () => PersonalInfoUncheckedUpdateWithoutResumeInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const PersonalInfoUpdateOneWithoutResumeNestedInputObjectSchema = Schema;
