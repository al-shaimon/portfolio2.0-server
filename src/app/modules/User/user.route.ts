import express from 'express';
import validateRequest from '../../middleWares/validateRequest';
import { AuthValidation } from './user.validation';
import { AuthController } from './user.controller';
import auth from '../../middleWares/auth';

const router = express.Router();

// Authentication routes
router.post(
  '/login',
  validateRequest(AuthValidation.loginValidationSchema),
  AuthController.loginUser
);

// Protected routes
router.patch(
  '/update-profile',
  auth('admin'),
  validateRequest(AuthValidation.updateProfileValidationSchema),
  AuthController.updateProfile
);

router.get('/profile', auth('admin'), AuthController.getProfile);

export const AuthRoutes = router;