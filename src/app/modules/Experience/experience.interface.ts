import { Document } from 'mongoose';

export interface TExperience extends Document {
  title: string;
  company: string;
  period: string;
  description: string;
  current?: boolean;
  startDate: Date;
  endDate?: Date;
  skills: string[];
  location?: string;
  responsibilities?: string[];
  achievements?: string[];
} 