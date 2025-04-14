import { z } from 'zod';
import { ProjectWhereUniqueInputObjectSchema } from './ProjectWhereUniqueInput.schema';
import { ProjectUpdateWithoutResumeInputObjectSchema } from './ProjectUpdateWithoutResumeInput.schema';
import { ProjectUncheckedUpdateWithoutResumeInputObjectSchema } from './ProjectUncheckedUpdateWithoutResumeInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProjectUpdateWithWhereUniqueWithoutResumeInput> =
  z
    .object({
      where: z.lazy(() => ProjectWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => ProjectUpdateWithoutResumeInputObjectSchema),
        z.lazy(() => ProjectUncheckedUpdateWithoutResumeInputObjectSchema),
      ]),
    })
    .strict();

export const ProjectUpdateWithWhereUniqueWithoutResumeInputObjectSchema =
  Schema;
