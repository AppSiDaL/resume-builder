import { z } from 'zod';
import { ReferenceWhereUniqueInputObjectSchema } from './objects/ReferenceWhereUniqueInput.schema';
import { ReferenceCreateInputObjectSchema } from './objects/ReferenceCreateInput.schema';
import { ReferenceUncheckedCreateInputObjectSchema } from './objects/ReferenceUncheckedCreateInput.schema';
import { ReferenceUpdateInputObjectSchema } from './objects/ReferenceUpdateInput.schema';
import { ReferenceUncheckedUpdateInputObjectSchema } from './objects/ReferenceUncheckedUpdateInput.schema';

export const ReferenceUpsertSchema = z.object({
  where: ReferenceWhereUniqueInputObjectSchema,
  create: z.union([
    ReferenceCreateInputObjectSchema,
    ReferenceUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    ReferenceUpdateInputObjectSchema,
    ReferenceUncheckedUpdateInputObjectSchema,
  ]),
});
