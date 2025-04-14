import { z } from 'zod';
import { ProjectWhereUniqueInputObjectSchema } from './ProjectWhereUniqueInput.schema';
import { ProjectCreateWithoutResumeInputObjectSchema } from './ProjectCreateWithoutResumeInput.schema';
import { ProjectUncheckedCreateWithoutResumeInputObjectSchema } from './ProjectUncheckedCreateWithoutResumeInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProjectCreateOrConnectWithoutResumeInput> = z
  .object({
    where: z.lazy(() => ProjectWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ProjectCreateWithoutResumeInputObjectSchema),
      z.lazy(() => ProjectUncheckedCreateWithoutResumeInputObjectSchema),
    ]),
  })
  .strict();

export const ProjectCreateOrConnectWithoutResumeInputObjectSchema = Schema;
