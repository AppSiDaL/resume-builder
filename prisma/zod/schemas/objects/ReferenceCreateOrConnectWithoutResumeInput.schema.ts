import { z } from 'zod';
import { ReferenceWhereUniqueInputObjectSchema } from './ReferenceWhereUniqueInput.schema';
import { ReferenceCreateWithoutResumeInputObjectSchema } from './ReferenceCreateWithoutResumeInput.schema';
import { ReferenceUncheckedCreateWithoutResumeInputObjectSchema } from './ReferenceUncheckedCreateWithoutResumeInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReferenceCreateOrConnectWithoutResumeInput> = z
  .object({
    where: z.lazy(() => ReferenceWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ReferenceCreateWithoutResumeInputObjectSchema),
      z.lazy(() => ReferenceUncheckedCreateWithoutResumeInputObjectSchema),
    ]),
  })
  .strict();

export const ReferenceCreateOrConnectWithoutResumeInputObjectSchema = Schema;
