import { Schema, model } from 'mongoose';
import { TUser } from './user.interface';
import bcrypt from 'bcrypt';
import config from '../../config';

const userSchema = new Schema<TUser>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, select: 0 },
    profilePhoto: {
      type: String,
      default:
        'https://res.cloudinary.com/dr4guscnl/image/upload/v1733812154/gmsevzbtjwnpjkqbq8be.png',
    },
    role: { type: String, enum: ['admin'], default: 'admin' },
  },
  { timestamps: true }
);

userSchema.pre('save', async function (next) {
  // Hash password before saving
  this.password = await bcrypt.hash(
    this.password,
    Number(config.bcrypt_salt_rounds)
  );
  next();
});

export const User = model<TUser>('User', userSchema);
