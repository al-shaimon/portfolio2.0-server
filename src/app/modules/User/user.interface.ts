import { Document } from 'mongoose';

export type TUserRole = 'admin';

export interface TUser extends Document {
  name: string;
  email: string;
  password: string;
  profilePhoto?: string;
  role: TUserRole;
  _id: string;
}

export type TLoginUser = {
  email: string;
  password: string;
};

export type TLoginResponse = {
  accessToken: string;
  user: Partial<TUser>;
};
