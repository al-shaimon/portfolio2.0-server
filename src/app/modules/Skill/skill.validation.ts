import { z } from 'zod';

const createSkillValidationSchema = z.object({
  name: z.string({
    required_error: 'Name is required',
  }),
  icon: z.string({
    required_error: 'Icon is required',
  }),
  color: z.string().optional(),
  darkColor: z.string().optional(),
  lightColor: z.string().optional(),
  category: z
    .enum(['frontend', 'backend', 'database', 'tools', 'other'])
    .optional(),
  proficiency: z.number().min(0).max(100).optional(),
});

const updateSkillValidationSchema = createSkillValidationSchema.partial();

export const SkillValidation = {
  createSkillValidationSchema,
  updateSkillValidationSchema,
};
