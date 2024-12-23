import { z } from 'zod';

const loginValidationSchema = z.object({
  email: z
    .string({
      required_error: 'Email is required',
    })
    .email('Invalid email format'),
  password: z.string({
    required_error: 'Password is required',
  }),
});

const updateProfileValidationSchema = z.object({
  name: z.string().optional(),
  profilePhoto: z.string().optional(),
  currentPassword: z.string({
    required_error: 'Current password is required',
  }),
  newPassword: z.string().optional(),
});

export const AuthValidation = {
  loginValidationSchema,
  updateProfileValidationSchema,
};
