import { z } from 'zod';
import { ReferenceWhereUniqueInputObjectSchema } from './ReferenceWhereUniqueInput.schema';
import { ReferenceUpdateWithoutResumeInputObjectSchema } from './ReferenceUpdateWithoutResumeInput.schema';
import { ReferenceUncheckedUpdateWithoutResumeInputObjectSchema } from './ReferenceUncheckedUpdateWithoutResumeInput.schema';
import { ReferenceCreateWithoutResumeInputObjectSchema } from './ReferenceCreateWithoutResumeInput.schema';
import { ReferenceUncheckedCreateWithoutResumeInputObjectSchema } from './ReferenceUncheckedCreateWithoutResumeInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReferenceUpsertWithWhereUniqueWithoutResumeInput> =
  z
    .object({
      where: z.lazy(() => ReferenceWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => ReferenceUpdateWithoutResumeInputObjectSchema),
        z.lazy(() => ReferenceUncheckedUpdateWithoutResumeInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => ReferenceCreateWithoutResumeInputObjectSchema),
        z.lazy(() => ReferenceUncheckedCreateWithoutResumeInputObjectSchema),
      ]),
    })
    .strict();

export const ReferenceUpsertWithWhereUniqueWithoutResumeInputObjectSchema =
  Schema;
