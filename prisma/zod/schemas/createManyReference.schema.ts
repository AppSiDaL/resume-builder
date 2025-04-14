import { z } from 'zod';
import { ReferenceCreateManyInputObjectSchema } from './objects/ReferenceCreateManyInput.schema';

export const ReferenceCreateManySchema = z.object({
  data: z.union([
    ReferenceCreateManyInputObjectSchema,
    z.array(ReferenceCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});
