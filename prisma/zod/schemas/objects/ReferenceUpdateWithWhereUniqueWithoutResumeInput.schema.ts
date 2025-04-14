import { z } from 'zod';
import { ReferenceWhereUniqueInputObjectSchema } from './ReferenceWhereUniqueInput.schema';
import { ReferenceUpdateWithoutResumeInputObjectSchema } from './ReferenceUpdateWithoutResumeInput.schema';
import { ReferenceUncheckedUpdateWithoutResumeInputObjectSchema } from './ReferenceUncheckedUpdateWithoutResumeInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReferenceUpdateWithWhereUniqueWithoutResumeInput> =
  z
    .object({
      where: z.lazy(() => ReferenceWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => ReferenceUpdateWithoutResumeInputObjectSchema),
        z.lazy(() => ReferenceUncheckedUpdateWithoutResumeInputObjectSchema),
      ]),
    })
    .strict();

export const ReferenceUpdateWithWhereUniqueWithoutResumeInputObjectSchema =
  Schema;
