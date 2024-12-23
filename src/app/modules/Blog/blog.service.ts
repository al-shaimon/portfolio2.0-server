import httpStatus from 'http-status';
import AppError from '../../errors/AppError';
import { TBlog } from './blog.interface';
import { Blog } from './blog.model';

const createBlog = async (payload: TBlog) => {
  const result = await Blog.create(payload);
  return result;
};

const getAllBlogs = async () => {
  const result = await Blog.find();
  return result;
};

const getBlogBySlug = async (slug: string) => {
  const result = await Blog.findOne({ slug });
  if (!result) {
    throw new AppError(httpStatus.NOT_FOUND, 'Blog not found');
  }
  return result;
};

const updateBlog = async (id: string, payload: Partial<TBlog>) => {
  const result = await Blog.findByIdAndUpdate(id, payload, { new: true });
  if (!result) {
    throw new AppError(httpStatus.NOT_FOUND, 'Blog not found');
  }
  return result;
};

const deleteBlog = async (id: string) => {
  const result = await Blog.findByIdAndDelete(id);
  if (!result) {
    throw new AppError(httpStatus.NOT_FOUND, 'Blog not found');
  }
  return result;
};

export const BlogServices = {
  createBlog,
  getAllBlogs,
  getBlogBySlug,
  updateBlog,
  deleteBlog,
};
