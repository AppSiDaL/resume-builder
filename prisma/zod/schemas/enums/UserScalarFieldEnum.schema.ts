import { z } from 'zod';

export const UserScalarFieldEnumSchema = z.enum([
  'id',
  'name',
  'email',
  'username',
  'password',
  'profileImage',
  'createdAt',
  'updatedAt',
]);
