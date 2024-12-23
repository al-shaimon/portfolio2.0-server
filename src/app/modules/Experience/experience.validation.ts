import { z } from 'zod';

const createExperienceValidationSchema = z.object({
  title: z.string({
    required_error: 'Title is required',
  }),
  company: z.string({
    required_error: 'Company is required',
  }),
  period: z.string({
    required_error: 'Period is required',
  }),
  description: z.string({
    required_error: 'Description is required',
  }),
  current: z.boolean().optional(),
  startDate: z.string({
    required_error: 'Start date is required',
  }),
  endDate: z.string().optional(),
  skills: z.array(z.string(), {
    required_error: 'Skills are required',
  }),
  location: z.string().optional(),
  responsibilities: z.array(z.string()).optional(),
  achievements: z.array(z.string()).optional(),
});

const updateExperienceValidationSchema = createExperienceValidationSchema.partial();

export const ExperienceValidation = {
  createExperienceValidationSchema,
  updateExperienceValidationSchema,
}; 