import express from 'express';
import validateRequest from '../../middleWares/validateRequest';
import { EducationController } from './education.controller';
import { EducationValidation } from './education.validation';
import auth from '../../middleWares/auth';
import { adminMiddleware } from '../User/adminMiddleware';

const router = express.Router();

// Public routes
router.get('/', EducationController.getAllEducation);
router.get('/:id', EducationController.getSingleEducation);

// Protected routes (admin only)
router.post(
  '/',
  auth('admin'),
  adminMiddleware,
  validateRequest(EducationValidation.createEducationValidationSchema),
  EducationController.createEducation
);

router.patch(
  '/:id',
  auth('admin'),
  adminMiddleware,
  validateRequest(EducationValidation.updateEducationValidationSchema),
  EducationController.updateEducation
);

router.delete(
  '/:id',
  auth('admin'),
  adminMiddleware,
  EducationController.deleteEducation
);

export const EducationRoutes = router;
