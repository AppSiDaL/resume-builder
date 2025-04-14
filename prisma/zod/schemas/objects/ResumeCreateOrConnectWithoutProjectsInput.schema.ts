import { z } from 'zod';
import { ResumeWhereUniqueInputObjectSchema } from './ResumeWhereUniqueInput.schema';
import { ResumeCreateWithoutProjectsInputObjectSchema } from './ResumeCreateWithoutProjectsInput.schema';
import { ResumeUncheckedCreateWithoutProjectsInputObjectSchema } from './ResumeUncheckedCreateWithoutProjectsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ResumeCreateOrConnectWithoutProjectsInput> = z
  .object({
    where: z.lazy(() => ResumeWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ResumeCreateWithoutProjectsInputObjectSchema),
      z.lazy(() => ResumeUncheckedCreateWithoutProjectsInputObjectSchema),
    ]),
  })
  .strict();

export const ResumeCreateOrConnectWithoutProjectsInputObjectSchema = Schema;
