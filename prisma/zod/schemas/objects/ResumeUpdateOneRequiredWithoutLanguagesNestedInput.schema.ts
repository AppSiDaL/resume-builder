import { z } from 'zod';
import { ResumeCreateWithoutLanguagesInputObjectSchema } from './ResumeCreateWithoutLanguagesInput.schema';
import { ResumeUncheckedCreateWithoutLanguagesInputObjectSchema } from './ResumeUncheckedCreateWithoutLanguagesInput.schema';
import { ResumeCreateOrConnectWithoutLanguagesInputObjectSchema } from './ResumeCreateOrConnectWithoutLanguagesInput.schema';
import { ResumeUpsertWithoutLanguagesInputObjectSchema } from './ResumeUpsertWithoutLanguagesInput.schema';
import { ResumeWhereUniqueInputObjectSchema } from './ResumeWhereUniqueInput.schema';
import { ResumeUpdateWithoutLanguagesInputObjectSchema } from './ResumeUpdateWithoutLanguagesInput.schema';
import { ResumeUncheckedUpdateWithoutLanguagesInputObjectSchema } from './ResumeUncheckedUpdateWithoutLanguagesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ResumeUpdateOneRequiredWithoutLanguagesNestedInput> =
  z
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
      upsert: z
        .lazy(() => ResumeUpsertWithoutLanguagesInputObjectSchema)
        .optional(),
      connect: z.lazy(() => ResumeWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => ResumeUpdateWithoutLanguagesInputObjectSchema),
          z.lazy(() => ResumeUncheckedUpdateWithoutLanguagesInputObjectSchema),
        ])
        .optional(),
    })
    .strict();

export const ResumeUpdateOneRequiredWithoutLanguagesNestedInputObjectSchema =
  Schema;
