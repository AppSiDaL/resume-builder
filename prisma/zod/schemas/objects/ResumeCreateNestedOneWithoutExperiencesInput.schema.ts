import { z } from 'zod';
import { ResumeCreateWithoutExperiencesInputObjectSchema } from './ResumeCreateWithoutExperiencesInput.schema';
import { ResumeUncheckedCreateWithoutExperiencesInputObjectSchema } from './ResumeUncheckedCreateWithoutExperiencesInput.schema';
import { ResumeCreateOrConnectWithoutExperiencesInputObjectSchema } from './ResumeCreateOrConnectWithoutExperiencesInput.schema';
import { ResumeWhereUniqueInputObjectSchema } from './ResumeWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ResumeCreateNestedOneWithoutExperiencesInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => ResumeCreateWithoutExperiencesInputObjectSchema),
        z.lazy(() => ResumeUncheckedCreateWithoutExperiencesInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => ResumeCreateOrConnectWithoutExperiencesInputObjectSchema)
      .optional(),
    connect: z.lazy(() => ResumeWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const ResumeCreateNestedOneWithoutExperiencesInputObjectSchema = Schema;
