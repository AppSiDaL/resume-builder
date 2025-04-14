import { z } from 'zod';
import { ResumeCreateWithoutReferencesInputObjectSchema } from './ResumeCreateWithoutReferencesInput.schema';
import { ResumeUncheckedCreateWithoutReferencesInputObjectSchema } from './ResumeUncheckedCreateWithoutReferencesInput.schema';
import { ResumeCreateOrConnectWithoutReferencesInputObjectSchema } from './ResumeCreateOrConnectWithoutReferencesInput.schema';
import { ResumeUpsertWithoutReferencesInputObjectSchema } from './ResumeUpsertWithoutReferencesInput.schema';
import { ResumeWhereUniqueInputObjectSchema } from './ResumeWhereUniqueInput.schema';
import { ResumeUpdateWithoutReferencesInputObjectSchema } from './ResumeUpdateWithoutReferencesInput.schema';
import { ResumeUncheckedUpdateWithoutReferencesInputObjectSchema } from './ResumeUncheckedUpdateWithoutReferencesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ResumeUpdateOneRequiredWithoutReferencesNestedInput> =
  z
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
      upsert: z
        .lazy(() => ResumeUpsertWithoutReferencesInputObjectSchema)
        .optional(),
      connect: z.lazy(() => ResumeWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => ResumeUpdateWithoutReferencesInputObjectSchema),
          z.lazy(() => ResumeUncheckedUpdateWithoutReferencesInputObjectSchema),
        ])
        .optional(),
    })
    .strict();

export const ResumeUpdateOneRequiredWithoutReferencesNestedInputObjectSchema =
  Schema;
