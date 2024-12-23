import { Schema, model } from 'mongoose';
import { TEducation } from './education.interface';

const educationSchema = new Schema<TEducation>(
  {
    period: { type: String, required: true },
    degree: { type: String, required: true },
    institution: { type: String, required: true },
    details: { type: String, required: true },
    current: { type: Boolean, default: false },
    startYear: { type: Number, required: true },
    endYear: { type: Number },
    result: { type: String },
  },
  { timestamps: true }
);

export const Education = model<TEducation>('Education', educationSchema);
