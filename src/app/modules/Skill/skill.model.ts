import { Schema, model } from 'mongoose';
import { TSkill } from './skill.interface';

const skillSchema = new Schema<TSkill>(
  {
    name: { type: String, required: true, unique: true },
    icon: { type: String, required: true },
    color: { type: String },
    darkColor: { type: String },
    lightColor: { type: String },
    category: {
      type: String,
      enum: ['frontend', 'backend', 'database', 'tools', 'other'],
      default: 'other',
    },
    proficiency: {
      type: Number,
      min: 0,
      max: 100,
      default: 70,
    },
  },
  { timestamps: true }
);

export const Skill = model<TSkill>('Skill', skillSchema);
