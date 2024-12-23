import { Document } from 'mongoose';

export interface TSkill extends Document {
  name: string;
  icon: string;
  color?: string;
  darkColor?: string;
  lightColor?: string;
  category?: 'frontend' | 'backend' | 'database' | 'tools' | 'other';
  proficiency?: number; // Optional: for skill level (1-100)
} 