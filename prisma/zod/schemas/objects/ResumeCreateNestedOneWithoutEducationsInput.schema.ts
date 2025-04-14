import { z } from 'zod';
import { ResumeCreateWithoutEducationsInputObjectSchema } from './ResumeCreateWithoutEducationsInput.schema';
import { ResumeUncheckedCreateWithoutEducationsInputObjectSchema } from './ResumeUncheckedCreateWithoutEducationsInput.schema';
import { ResumeCreateOrConnectWithoutEducationsInputObjectSchema } from './ResumeCreateOrConnectWithoutEducationsInput.schema';
import { ResumeWhereUniqueInputObjectSchema } from './ResumeWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ResumeCreateNestedOneWithoutEducationsInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => ResumeCreateWithoutEducationsInputObjectSchema),
        z.lazy(() => ResumeUncheckedCreateWithoutEducationsInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => ResumeCreateOrConnectWithoutEducationsInputObjectSchema)
      .optional(),
    connect: z.lazy(() => ResumeWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const ResumeCreateNestedOneWithoutEducationsInputObjectSchema = Schema;
