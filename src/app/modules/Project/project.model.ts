import { Schema, model } from 'mongoose';
import { TProject } from './project.interface';

const projectSchema = new Schema<TProject>(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    images: [{ type: String }],
    technologies: [{ type: String, required: true }],
    features: [{ type: String }],
    challenges: [{ type: String }],
    implementation: { type: String },
    liveUrl: { type: String, required: true },
    githubUrls: {
      client: { type: String, required: true },
      server: { type: String, required: true },
    },
    slug: { type: String, required: true, unique: true },
  },
  { timestamps: true }
);

export const Project = model<TProject>('Project', projectSchema);
