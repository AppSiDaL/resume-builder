import { z } from 'zod';

export const CertificationScalarFieldEnumSchema = z.enum([
  'id',
  'name',
  'issuer',
  'date',
  'url',
  'resumeId',
  'order',
]);
