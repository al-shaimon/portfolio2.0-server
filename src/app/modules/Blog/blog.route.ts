import express from 'express';
import validateRequest from '../../middleWares/validateRequest';
import { BlogController } from './blog.controller';
import { BlogValidation } from './blog.validation';
import auth from '../../middleWares/auth';
import { adminMiddleware } from '../User/adminMiddleware';

const router = express.Router();

// Public routes
router.get('/', BlogController.getAllBlogs);
router.get('/:slug', BlogController.getBlogBySlug);

// Protected routes (admin only)
router.post(
  '/',
  auth('admin'),
  adminMiddleware,
  validateRequest(BlogValidation.createBlogValidationSchema),
  BlogController.createBlog
);

router.patch(
  '/:id',
  auth('admin'),
  adminMiddleware,
  validateRequest(BlogValidation.updateBlogValidationSchema),
  BlogController.updateBlog
);

router.delete(
  '/:id',
  auth('admin'),
  adminMiddleware,
  BlogController.deleteBlog
);

export const BlogRoutes = router;
