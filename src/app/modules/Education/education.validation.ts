import { z } from 'zod';

const createEducationValidationSchema = z.object({
  period: z.string({
    required_error: 'Period is required',
  }),
  degree: z.string({
    required_error: 'Degree is required',
  }),
  institution: z.string({
    required_error: 'Institution is required',
  }),
  details: z.string({
    required_error: 'Details are required',
  }),
  current: z.boolean().optional(),
  startYear: z.number({
    required_error: 'Start year is required',
  }),
  endYear: z.number().optional(),
  result: z.string().optional(),
});

const updateEducationValidationSchema = createEducationValidationSchema.partial();

export const EducationValidation = {
  createEducationValidationSchema,
  updateEducationValidationSchema,
}; 