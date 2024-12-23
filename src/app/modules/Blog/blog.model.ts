import { Schema, model } from 'mongoose';
import { TBlog } from './blog.interface';

const blogSchema = new Schema<TBlog>(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    excerpt: { type: String, required: true },
    content: { type: String, required: true },
    banner: { type: String, required: true },
    date: { type: Date, default: Date.now },
    readTime: { type: String, required: true },
    tags: [{ type: String }],
  },
  { timestamps: true }
);

export const Blog = model<TBlog>('Blog', blogSchema);
