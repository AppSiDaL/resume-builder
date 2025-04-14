import { z } from 'zod';
import { ResumeWhereUniqueInputObjectSchema } from './objects/ResumeWhereUniqueInput.schema';
import { ResumeCreateInputObjectSchema } from './objects/ResumeCreateInput.schema';
import { ResumeUncheckedCreateInputObjectSchema } from './objects/ResumeUncheckedCreateInput.schema';
import { ResumeUpdateInputObjectSchema } from './objects/ResumeUpdateInput.schema';
import { ResumeUncheckedUpdateInputObjectSchema } from './objects/ResumeUncheckedUpdateInput.schema';

export const ResumeUpsertSchema = z.object({
  where: ResumeWhereUniqueInputObjectSchema,
  create: z.union([
    ResumeCreateInputObjectSchema,
    ResumeUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    ResumeUpdateInputObjectSchema,
    ResumeUncheckedUpdateInputObjectSchema,
  ]),
});
