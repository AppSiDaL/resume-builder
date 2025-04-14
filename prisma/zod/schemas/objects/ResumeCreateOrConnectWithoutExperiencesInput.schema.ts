import { z } from 'zod';
import { ResumeWhereUniqueInputObjectSchema } from './ResumeWhereUniqueInput.schema';
import { ResumeCreateWithoutExperiencesInputObjectSchema } from './ResumeCreateWithoutExperiencesInput.schema';
import { ResumeUncheckedCreateWithoutExperiencesInputObjectSchema } from './ResumeUncheckedCreateWithoutExperiencesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ResumeCreateOrConnectWithoutExperiencesInput> = z
  .object({
    where: z.lazy(() => ResumeWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ResumeCreateWithoutExperiencesInputObjectSchema),
      z.lazy(() => ResumeUncheckedCreateWithoutExperiencesInputObjectSchema),
    ]),
  })
  .strict();

export const ResumeCreateOrConnectWithoutExperiencesInputObjectSchema = Schema;
