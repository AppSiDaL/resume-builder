import { z } from 'zod';
import { ResumeCreateWithoutReferencesInputObjectSchema } from './ResumeCreateWithoutReferencesInput.schema';
import { ResumeUncheckedCreateWithoutReferencesInputObjectSchema } from './ResumeUncheckedCreateWithoutReferencesInput.schema';
import { ResumeCreateOrConnectWithoutReferencesInputObjectSchema } from './ResumeCreateOrConnectWithoutReferencesInput.schema';
import { ResumeWhereUniqueInputObjectSchema } from './ResumeWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ResumeCreateNestedOneWithoutReferencesInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => ResumeCreateWithoutReferencesInputObjectSchema),
        z.lazy(() => ResumeUncheckedCreateWithoutReferencesInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => ResumeCreateOrConnectWithoutReferencesInputObjectSchema)
      .optional(),
    connect: z.lazy(() => ResumeWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const ResumeCreateNestedOneWithoutReferencesInputObjectSchema = Schema;
