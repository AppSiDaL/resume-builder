import { z } from 'zod';
import { ResumeUpdateWithoutProjectsInputObjectSchema } from './ResumeUpdateWithoutProjectsInput.schema';
import { ResumeUncheckedUpdateWithoutProjectsInputObjectSchema } from './ResumeUncheckedUpdateWithoutProjectsInput.schema';
import { ResumeCreateWithoutProjectsInputObjectSchema } from './ResumeCreateWithoutProjectsInput.schema';
import { ResumeUncheckedCreateWithoutProjectsInputObjectSchema } from './ResumeUncheckedCreateWithoutProjectsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ResumeUpsertWithoutProjectsInput> = z
  .object({
    update: z.union([
      z.lazy(() => ResumeUpdateWithoutProjectsInputObjectSchema),
      z.lazy(() => ResumeUncheckedUpdateWithoutProjectsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => ResumeCreateWithoutProjectsInputObjectSchema),
      z.lazy(() => ResumeUncheckedCreateWithoutProjectsInputObjectSchema),
    ]),
  })
  .strict();

export const ResumeUpsertWithoutProjectsInputObjectSchema = Schema;
