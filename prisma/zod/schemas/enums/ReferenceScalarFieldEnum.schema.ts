import { z } from 'zod';

export const ReferenceScalarFieldEnumSchema = z.enum([
  'id',
  'name',
  'company',
  'position',
  'email',
  'phone',
  'resumeId',
]);
