import { Schema, model } from 'mongoose';
import { TExperience } from './experience.interface';

const experienceSchema = new Schema<TExperience>(
  {
    title: { type: String, required: true },
    company: { type: String, required: true },
    period: { type: String, required: true },
    description: { type: String, required: true },
    current: { type: Boolean, default: false },
    startDate: { type: Date, required: true },
    endDate: { type: Date },
    skills: [{ type: String, required: true }],
    location: { type: String },
    responsibilities: [{ type: String }],
    achievements: [{ type: String }],
  },
  { timestamps: true }
);

export const Experience = model<TExperience>('Experience', experienceSchema);
