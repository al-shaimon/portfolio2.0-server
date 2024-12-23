import { Document } from 'mongoose';

export interface TEducation extends Document {
  period: string;
  degree: string;
  institution: string;
  details: string;
  current?: boolean;
  startYear: number;
  endYear?: number;
  result?: string;
} 