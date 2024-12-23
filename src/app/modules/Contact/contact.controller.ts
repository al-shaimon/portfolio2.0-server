import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { sendContactFormEmail } from '../../utils/mailservice';

const submitContactForm = catchAsync(async (req: Request, res: Response) => {
  await sendContactFormEmail(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Message sent successfully',
    data: null,
  });
});

export const ContactController = {
  submitContactForm,
};
