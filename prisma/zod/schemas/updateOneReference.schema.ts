import { z } from 'zod';
import { ReferenceUpdateInputObjectSchema } from './objects/ReferenceUpdateInput.schema';
import { ReferenceUncheckedUpdateInputObjectSchema } from './objects/ReferenceUncheckedUpdateInput.schema';
import { ReferenceWhereUniqueInputObjectSchema } from './objects/ReferenceWhereUniqueInput.schema';

export const ReferenceUpdateOneSchema = z.object({
  data: z.union([
    ReferenceUpdateInputObjectSchema,
    ReferenceUncheckedUpdateInputObjectSchema,
  ]),
  where: ReferenceWhereUniqueInputObjectSchema,
});
