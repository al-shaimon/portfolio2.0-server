import { z } from 'zod';

const createProjectValidationSchema = z.object({
  title: z.string(),
  description: z.string(),
  image: z.string(),
  images: z.array(z.string()).optional(),
  technologies: z.array(z.string()),
  features: z.array(z.string()).optional(),
  challenges: z.array(z.string()).optional(),
  implementation: z.string().optional(),
  liveUrl: z.string(),
  githubUrls: z.object({
    client: z.string(),
    server: z.string(),
  }),
  slug: z.string(),
});

const updateProjectValidationSchema = createProjectValidationSchema.partial();

export const ProjectValidation = {
  createProjectValidationSchema,
  updateProjectValidationSchema,
};
