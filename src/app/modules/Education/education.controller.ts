import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { EducationServices } from './education.service';

const createEducation = catchAsync(async (req: Request, res: Response) => {
  const result = await EducationServices.createEducation(req.body);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Education record created successfully',
    data: result,
  });
});

const getAllEducation = catchAsync(async (req: Request, res: Response) => {
  const result = await EducationServices.getAllEducation();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Education records retrieved successfully',
    data: result,
  });
});

const getSingleEducation = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await EducationServices.getSingleEducation(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Education record retrieved successfully',
    data: result,
  });
});

const updateEducation = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await EducationServices.updateEducation(id, req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Education record updated successfully',
    data: result,
  });
});

const deleteEducation = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await EducationServices.deleteEducation(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Education record deleted successfully',
    data: result,
  });
});

export const EducationController = {
  createEducation,
  getAllEducation,
  getSingleEducation,
  updateEducation,
  deleteEducation,
};
