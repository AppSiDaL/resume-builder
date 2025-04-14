import { z } from 'zod';
import { ResumeWhereUniqueInputObjectSchema } from './ResumeWhereUniqueInput.schema';
import { ResumeCreateWithoutLanguagesInputObjectSchema } from './ResumeCreateWithoutLanguagesInput.schema';
import { ResumeUncheckedCreateWithoutLanguagesInputObjectSchema } from './ResumeUncheckedCreateWithoutLanguagesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ResumeCreateOrConnectWithoutLanguagesInput> = z
  .object({
    where: z.lazy(() => ResumeWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ResumeCreateWithoutLanguagesInputObjectSchema),
      z.lazy(() => ResumeUncheckedCreateWithoutLanguagesInputObjectSchema),
    ]),
  })
  .strict();

export const ResumeCreateOrConnectWithoutLanguagesInputObjectSchema = Schema;
