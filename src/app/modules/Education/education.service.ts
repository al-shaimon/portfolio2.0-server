import httpStatus from 'http-status';
import AppError from '../../errors/AppError';
import { TEducation } from './education.interface';
import { Education } from './education.model';
import { QueryBuilder } from '../../builder/QueryBuilder';

const createEducation = async (payload: TEducation) => {
  const result = await Education.create(payload);
  return result;
};

const getAllEducation = async (query: Record<string, unknown>) => {
  const educationQuery = new QueryBuilder(Education, query)
    .filter()
    .sort()
    .paginate()
    .fields();

  const result = await educationQuery.modelQuery;
  return result;
};

const getSingleEducation = async (id: string) => {
  const result = await Education.findById(id);
  if (!result) {
    throw new AppError(httpStatus.NOT_FOUND, 'Education record not found');
  }
  return result;
};

const updateEducation = async (id: string, payload: Partial<TEducation>) => {
  const result = await Education.findByIdAndUpdate(id, payload, { new: true });
  if (!result) {
    throw new AppError(httpStatus.NOT_FOUND, 'Education record not found');
  }
  return result;
};

const deleteEducation = async (id: string) => {
  const result = await Education.findByIdAndDelete(id);
  if (!result) {
    throw new AppError(httpStatus.NOT_FOUND, 'Education record not found');
  }
  return result;
};

export const EducationServices = {
  createEducation,
  getAllEducation,
  getSingleEducation,
  updateEducation,
  deleteEducation,
}; 