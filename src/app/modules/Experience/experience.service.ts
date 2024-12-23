import httpStatus from 'http-status';
import AppError from '../../errors/AppError';
import { TExperience } from './experience.interface';
import { Experience } from './experience.model';

const createExperience = async (payload: TExperience) => {
  const result = await Experience.create(payload);
  return result;
};

const getAllExperience = async () => {
  const result = await Experience.find();
  return result;
};

const getSingleExperience = async (id: string) => {
  const result = await Experience.findById(id);
  if (!result) {
    throw new AppError(httpStatus.NOT_FOUND, 'Experience record not found');
  }
  return result;
};

const updateExperience = async (id: string, payload: Partial<TExperience>) => {
  const result = await Experience.findByIdAndUpdate(id, payload, { new: true });
  if (!result) {
    throw new AppError(httpStatus.NOT_FOUND, 'Experience record not found');
  }
  return result;
};

const deleteExperience = async (id: string) => {
  const result = await Experience.findByIdAndDelete(id);
  if (!result) {
    throw new AppError(httpStatus.NOT_FOUND, 'Experience record not found');
  }
  return result;
};

export const ExperienceServices = {
  createExperience,
  getAllExperience,
  getSingleExperience,
  updateExperience,
  deleteExperience,
};
