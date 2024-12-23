import express from 'express';
import validateRequest from '../../middleWares/validateRequest';
import { ExperienceController } from './experience.controller';
import { ExperienceValidation } from './experience.validation';
import auth from '../../middleWares/auth';
import { adminMiddleware } from '../User/adminMiddleware';

const router = express.Router();

// Public routes
router.get('/', ExperienceController.getAllExperience);
router.get('/:id', ExperienceController.getSingleExperience);

// Protected routes (admin only)
router.post(
  '/',
  auth('admin'),
  adminMiddleware,
  validateRequest(ExperienceValidation.createExperienceValidationSchema),
  ExperienceController.createExperience
);

router.patch(
  '/:id',
  auth('admin'),
  adminMiddleware,
  validateRequest(ExperienceValidation.updateExperienceValidationSchema),
  ExperienceController.updateExperience
);

router.delete(
  '/:id',
  auth('admin'),
  adminMiddleware,
  ExperienceController.deleteExperience
);

export const ExperienceRoutes = router;
