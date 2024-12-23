import httpStatus from 'http-status';
import { TLoginResponse, TLoginUser } from './user.interface';
import { User } from './user.model';
import AppError from '../../errors/AppError';
import { createToken } from './user.utils';
import bcrypt from 'bcrypt';
import config from '../../config';

const loginUser = async (payload: TLoginUser): Promise<TLoginResponse> => {
  // Check if user exists
  const user = await User.findOne({ email: payload.email }).select('+password');
  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, 'User not found');
  }

  // Check if password matches
  if (!user.password) {
    throw new AppError(httpStatus.INTERNAL_SERVER_ERROR, 'Password not found');
  }

  const isPasswordMatch = await bcrypt.compare(payload.password, user.password);
  if (!isPasswordMatch) {
    throw new AppError(httpStatus.UNAUTHORIZED, 'Invalid password');
  }

  // Create access token
  const accessToken = createToken(
    { id: user._id, role: user.role },
    config.jwt_access_secret as string,
    config.jwt_access_expires_in as string
  );

  return {
    accessToken,
    user: {
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      profilePhoto: user.profilePhoto,
    },
  };
};

const getProfile = async (userId: string) => {
  const user = await User.findById(userId);
  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, 'User not found');
  }
  return user;
};

const updateProfile = async (
  userId: string,
  payload: {
    name?: string;
    profilePhoto?: string;
    currentPassword: string;
    newPassword?: string;
  }
) => {
  const user = await User.findById(userId).select('+password');
  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, 'User not found');
  }

  // Verify current password
  const isPasswordMatch = await bcrypt.compare(
    payload.currentPassword,
    user.password
  );
  if (!isPasswordMatch) {
    throw new AppError(
      httpStatus.UNAUTHORIZED,
      'Current password is incorrect'
    );
  }

  // Update fields
  if (payload.name) user.name = payload.name;
  if (payload.profilePhoto) user.profilePhoto = payload.profilePhoto;
  if (payload.newPassword) {
    user.password = await bcrypt.hash(
      payload.newPassword,
      Number(config.bcrypt_salt_rounds)
    );
  }

  await user.save();

  return {
    _id: user._id,
    name: user.name,
    email: user.email,
    role: user.role,
    profilePhoto: user.profilePhoto,
  };
};

export const AuthServices = {
  loginUser,
  getProfile,
  updateProfile,
};
