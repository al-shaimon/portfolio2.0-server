import { z } from 'zod';

const contactFormValidationSchema = z.object({
  name: z.string({
    required_error: 'Name is required',
  }),
  email: z
    .string({
      required_error: 'Email is required',
    })
    .email('Invalid email format'),
  message: z
    .string({
      required_error: 'Message is required',
    })
    .min(10, 'Message must be at least 10 characters long'),
});

export const ContactValidation = {
  contactFormValidationSchema,
};
