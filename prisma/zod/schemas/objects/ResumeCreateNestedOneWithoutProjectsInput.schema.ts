import { z } from 'zod';
import { ResumeCreateWithoutProjectsInputObjectSchema } from './ResumeCreateWithoutProjectsInput.schema';
import { ResumeUncheckedCreateWithoutProjectsInputObjectSchema } from './ResumeUncheckedCreateWithoutProjectsInput.schema';
import { ResumeCreateOrConnectWithoutProjectsInputObjectSchema } from './ResumeCreateOrConnectWithoutProjectsInput.schema';
import { ResumeWhereUniqueInputObjectSchema } from './ResumeWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ResumeCreateNestedOneWithoutProjectsInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => ResumeCreateWithoutProjectsInputObjectSchema),
        z.lazy(() => ResumeUncheckedCreateWithoutProjectsInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => ResumeCreateOrConnectWithoutProjectsInputObjectSchema)
      .optional(),
    connect: z.lazy(() => ResumeWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const ResumeCreateNestedOneWithoutProjectsInputObjectSchema = Schema;
