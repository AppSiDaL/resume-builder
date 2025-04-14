import { z } from 'zod';
import { ReferenceCreateInputObjectSchema } from './objects/ReferenceCreateInput.schema';
import { ReferenceUncheckedCreateInputObjectSchema } from './objects/ReferenceUncheckedCreateInput.schema';

export const ReferenceCreateOneSchema = z.object({
  data: z.union([
    ReferenceCreateInputObjectSchema,
    ReferenceUncheckedCreateInputObjectSchema,
  ]),
});
