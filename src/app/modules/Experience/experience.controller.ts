import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { ExperienceServices } from './experience.service';

const createExperience = catchAsync(async (req: Request, res: Response) => {
  const result = await ExperienceServices.createExperience(req.body);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Experience record created successfully',
    data: result,
  });
});

const getAllExperience = catchAsync(async (req: Request, res: Response) => {
  const result = await ExperienceServices.getAllExperience(req.query);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Experience records retrieved successfully',
    data: result,
  });
});

const getSingleExperience = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await ExperienceServices.getSingleExperience(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Experience record retrieved successfully',
    data: result,
  });
});

const updateExperience = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await ExperienceServices.updateExperience(id, req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Experience record updated successfully',
    data: result,
  });
});

const deleteExperience = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await ExperienceServices.deleteExperience(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Experience record deleted successfully',
    data: result,
  });
});

export const ExperienceController = {
  createExperience,
  getAllExperience,
  getSingleExperience,
  updateExperience,
  deleteExperience,
}; 