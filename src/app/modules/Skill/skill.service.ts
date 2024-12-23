import httpStatus from 'http-status';
import AppError from '../../errors/AppError';
import { TSkill } from './skill.interface';
import { Skill } from './skill.model';
import { QueryBuilder } from '../../builder/QueryBuilder';

const createSkill = async (payload: TSkill) => {
  const result = await Skill.create(payload);
  return result;
};

const getAllSkills = async (query: Record<string, unknown>) => {
  const skillQuery = new QueryBuilder(Skill, query)
    .filter()
    .sort()
    .paginate()
    .fields();

  const result = await skillQuery.modelQuery;
  return result;
};

const getSkillsByCategory = async (category: string) => {
  const result = await Skill.find({ category });
  return result;
};

const updateSkill = async (id: string, payload: Partial<TSkill>) => {
  const result = await Skill.findByIdAndUpdate(id, payload, { new: true });
  if (!result) {
    throw new AppError(httpStatus.NOT_FOUND, 'Skill not found');
  }
  return result;
};

const deleteSkill = async (id: string) => {
  const result = await Skill.findByIdAndDelete(id);
  if (!result) {
    throw new AppError(httpStatus.NOT_FOUND, 'Skill not found');
  }
  return result;
};

export const SkillServices = {
  createSkill,
  getAllSkills,
  getSkillsByCategory,
  updateSkill,
  deleteSkill,
};
