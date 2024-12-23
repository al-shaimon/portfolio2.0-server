import httpStatus from 'http-status';
import AppError from '../../errors/AppError';
import { TProject } from './project.interface';
import { Project } from './project.model';
import { QueryBuilder } from '../../builder/QueryBuilder';

const createProject = async (payload: TProject) => {
  const result = await Project.create(payload);
  return result;
};

const getAllProjects = async (query: Record<string, unknown>) => {
  const projectQuery = new QueryBuilder(Project, query)
    .filter()
    .sort()
    .paginate()
    .fields();

  const result = await projectQuery.modelQuery;
  return result;
};

const getProjectBySlug = async (slug: string) => {
  const result = await Project.findOne({ slug });
  if (!result) {
    throw new AppError(httpStatus.NOT_FOUND, 'Project not found');
  }
  return result;
};

const updateProject = async (id: string, payload: Partial<TProject>) => {
  const result = await Project.findByIdAndUpdate(id, payload, { new: true });
  if (!result) {
    throw new AppError(httpStatus.NOT_FOUND, 'Project not found');
  }
  return result;
};

const deleteProject = async (id: string) => {
  const result = await Project.findByIdAndDelete(id);
  if (!result) {
    throw new AppError(httpStatus.NOT_FOUND, 'Project not found');
  }
  return result;
};

export const ProjectServices = {
  createProject,
  getAllProjects,
  getProjectBySlug,
  updateProject,
  deleteProject,
};
