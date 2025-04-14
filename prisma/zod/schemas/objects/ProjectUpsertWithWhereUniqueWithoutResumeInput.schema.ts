import { z } from 'zod';
import { ProjectWhereUniqueInputObjectSchema } from './ProjectWhereUniqueInput.schema';
import { ProjectUpdateWithoutResumeInputObjectSchema } from './ProjectUpdateWithoutResumeInput.schema';
import { ProjectUncheckedUpdateWithoutResumeInputObjectSchema } from './ProjectUncheckedUpdateWithoutResumeInput.schema';
import { ProjectCreateWithoutResumeInputObjectSchema } from './ProjectCreateWithoutResumeInput.schema';
import { ProjectUncheckedCreateWithoutResumeInputObjectSchema } from './ProjectUncheckedCreateWithoutResumeInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProjectUpsertWithWhereUniqueWithoutResumeInput> =
  z
    .object({
      where: z.lazy(() => ProjectWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => ProjectUpdateWithoutResumeInputObjectSchema),
        z.lazy(() => ProjectUncheckedUpdateWithoutResumeInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => ProjectCreateWithoutResumeInputObjectSchema),
        z.lazy(() => ProjectUncheckedCreateWithoutResumeInputObjectSchema),
      ]),
    })
    .strict();

export const ProjectUpsertWithWhereUniqueWithoutResumeInputObjectSchema =
  Schema;
