import express from 'express';
import validateRequest from '../../middleWares/validateRequest';
import { ProjectController } from './project.controller';
import { ProjectValidation } from './project.validation';
import auth from '../../middleWares/auth';
import { adminMiddleware } from '../User/adminMiddleware';

const router = express.Router();

// Public routes
router.get('/', ProjectController.getAllProjects);
router.get('/:slug', ProjectController.getProjectBySlug);

// Protected routes (admin only)
router.post(
  '/',
  auth('admin'),
  adminMiddleware,
  validateRequest(ProjectValidation.createProjectValidationSchema),
  ProjectController.createProject
);

router.patch(
  '/:id',
  auth('admin'),
  adminMiddleware,
  validateRequest(ProjectValidation.updateProjectValidationSchema),
  ProjectController.updateProject
);

router.delete(
  '/:id',
  auth('admin'),
  adminMiddleware,
  ProjectController.deleteProject
);

export const ProjectRoutes = router;
