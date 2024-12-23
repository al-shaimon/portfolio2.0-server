import express from 'express';
import validateRequest from '../../middleWares/validateRequest';
import { ContactController } from './contact.controller';
import { ContactValidation } from './contact.validation';

const router = express.Router();

router.post(
  '/',
  validateRequest(ContactValidation.contactFormValidationSchema),
  ContactController.submitContactForm
);

export const ContactRoutes = router;
