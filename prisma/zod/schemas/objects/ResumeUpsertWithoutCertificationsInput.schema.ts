import { z } from 'zod';
import { ResumeUpdateWithoutCertificationsInputObjectSchema } from './ResumeUpdateWithoutCertificationsInput.schema';
import { ResumeUncheckedUpdateWithoutCertificationsInputObjectSchema } from './ResumeUncheckedUpdateWithoutCertificationsInput.schema';
import { ResumeCreateWithoutCertificationsInputObjectSchema } from './ResumeCreateWithoutCertificationsInput.schema';
import { ResumeUncheckedCreateWithoutCertificationsInputObjectSchema } from './ResumeUncheckedCreateWithoutCertificationsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ResumeUpsertWithoutCertificationsInput> = z
  .object({
    update: z.union([
      z.lazy(() => ResumeUpdateWithoutCertificationsInputObjectSchema),
      z.lazy(() => ResumeUncheckedUpdateWithoutCertificationsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => ResumeCreateWithoutCertificationsInputObjectSchema),
      z.lazy(() => ResumeUncheckedCreateWithoutCertificationsInputObjectSchema),
    ]),
  })
  .strict();

export const ResumeUpsertWithoutCertificationsInputObjectSchema = Schema;
