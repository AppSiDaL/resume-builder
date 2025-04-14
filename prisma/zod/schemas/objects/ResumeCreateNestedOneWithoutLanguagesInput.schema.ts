import { z } from 'zod';
import { ResumeCreateWithoutLanguagesInputObjectSchema } from './ResumeCreateWithoutLanguagesInput.schema';
import { ResumeUncheckedCreateWithoutLanguagesInputObjectSchema } from './ResumeUncheckedCreateWithoutLanguagesInput.schema';
import { ResumeCreateOrConnectWithoutLanguagesInputObjectSchema } from './ResumeCreateOrConnectWithoutLanguagesInput.schema';
import { ResumeWhereUniqueInputObjectSchema } from './ResumeWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ResumeCreateNestedOneWithoutLanguagesInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => ResumeCreateWithoutLanguagesInputObjectSchema),
        z.lazy(() => ResumeUncheckedCreateWithoutLanguagesInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => ResumeCreateOrConnectWithoutLanguagesInputObjectSchema)
      .optional(),
    connect: z.lazy(() => ResumeWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const ResumeCreateNestedOneWithoutLanguagesInputObjectSchema = Schema;
