import { z } from 'zod';
import { ResumeCreateWithoutExperiencesInputObjectSchema } from './ResumeCreateWithoutExperiencesInput.schema';
import { ResumeUncheckedCreateWithoutExperiencesInputObjectSchema } from './ResumeUncheckedCreateWithoutExperiencesInput.schema';
import { ResumeCreateOrConnectWithoutExperiencesInputObjectSchema } from './ResumeCreateOrConnectWithoutExperiencesInput.schema';
import { ResumeUpsertWithoutExperiencesInputObjectSchema } from './ResumeUpsertWithoutExperiencesInput.schema';
import { ResumeWhereUniqueInputObjectSchema } from './ResumeWhereUniqueInput.schema';
import { ResumeUpdateWithoutExperiencesInputObjectSchema } from './ResumeUpdateWithoutExperiencesInput.schema';
import { ResumeUncheckedUpdateWithoutExperiencesInputObjectSchema } from './ResumeUncheckedUpdateWithoutExperiencesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ResumeUpdateOneRequiredWithoutExperiencesNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ResumeCreateWithoutExperiencesInputObjectSchema),
          z.lazy(
            () => ResumeUncheckedCreateWithoutExperiencesInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => ResumeCreateOrConnectWithoutExperiencesInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => ResumeUpsertWithoutExperiencesInputObjectSchema)
        .optional(),
      connect: z.lazy(() => ResumeWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => ResumeUpdateWithoutExperiencesInputObjectSchema),
          z.lazy(
            () => ResumeUncheckedUpdateWithoutExperiencesInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const ResumeUpdateOneRequiredWithoutExperiencesNestedInputObjectSchema =
  Schema;
