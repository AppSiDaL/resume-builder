import { z } from 'zod';

export const PersonalInfoScalarFieldEnumSchema = z.enum([
  'id',
  'fullName',
  'title',
  'email',
  'phone',
  'address',
  'website',
  'summary',
  'resumeId',
]);
