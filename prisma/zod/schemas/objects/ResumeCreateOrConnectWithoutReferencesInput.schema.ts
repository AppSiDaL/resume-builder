import { z } from 'zod';
import { ResumeWhereUniqueInputObjectSchema } from './ResumeWhereUniqueInput.schema';
import { ResumeCreateWithoutReferencesInputObjectSchema } from './ResumeCreateWithoutReferencesInput.schema';
import { ResumeUncheckedCreateWithoutReferencesInputObjectSchema } from './ResumeUncheckedCreateWithoutReferencesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ResumeCreateOrConnectWithoutReferencesInput> = z
  .object({
    where: z.lazy(() => ResumeWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ResumeCreateWithoutReferencesInputObjectSchema),
      z.lazy(() => ResumeUncheckedCreateWithoutReferencesInputObjectSchema),
    ]),
  })
  .strict();

export const ResumeCreateOrConnectWithoutReferencesInputObjectSchema = Schema;
