import express from 'express';
import validateRequest from '../../middleWares/validateRequest';
import { SkillController } from './skill.controller';
import { SkillValidation } from './skill.validation';
import auth from '../../middleWares/auth';
import { adminMiddleware } from '../User/adminMiddleware';

const router = express.Router();

// Public routes
router.get('/', SkillController.getAllSkills);
router.get('/category/:category', SkillController.getSkillsByCategory);

// Protected routes (admin only)
router.post(
  '/',
  auth('admin'),
  adminMiddleware,
  validateRequest(SkillValidation.createSkillValidationSchema),
  SkillController.createSkill
);

router.patch(
  '/:id',
  auth('admin'),
  adminMiddleware,
  validateRequest(SkillValidation.updateSkillValidationSchema),
  SkillController.updateSkill
);

router.delete(
  '/:id',
  auth('admin'),
  adminMiddleware,
  SkillController.deleteSkill
);

export const SkillRoutes = router;
