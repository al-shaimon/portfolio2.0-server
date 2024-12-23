import { z } from 'zod';

const createBlogValidationSchema = z.object({
  title: z.string({
    required_error: 'Title is required',
  }),
  slug: z.string({
    required_error: 'Slug is required',
  }),
  excerpt: z.string({
    required_error: 'Excerpt is required',
  }),
  content: z.string({
    required_error: 'Content is required',
  }),
  banner: z.string({
    required_error: 'Banner image is required',
  }),
  date: z.string().optional(), // Will be handled by default Date.now
  readTime: z.string({
    required_error: 'Read time is required',
  }),
  tags: z.array(z.string()),
});

const updateBlogValidationSchema = createBlogValidationSchema.partial();

export const BlogValidation = {
  createBlogValidationSchema,
  updateBlogValidationSchema,
};
