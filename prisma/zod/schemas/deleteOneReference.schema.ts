import { z } from 'zod';
import { ReferenceWhereUniqueInputObjectSchema } from './objects/ReferenceWhereUniqueInput.schema';

export const ReferenceDeleteOneSchema = z.object({
  where: ReferenceWhereUniqueInputObjectSchema,
});
