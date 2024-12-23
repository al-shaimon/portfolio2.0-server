import { Document } from 'mongoose';

export interface TProject extends Document {
  title: string;
  description: string;
  image: string;
  images?: string[];
  technologies: string[];
  features?: string[];
  challenges?: string[];
  implementation?: string;
  liveUrl: string;
  githubUrls: {
    client: string;
    server: string;
  };
  slug: string;
}
