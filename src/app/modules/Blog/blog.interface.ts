import { Document } from 'mongoose';

export interface TBlog extends Document {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  banner: string;
  date: Date;
  readTime: string;
  tags: string[];
}
