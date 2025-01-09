import { model, Schema } from 'mongoose';
import { TUser, UserModel } from './user.interface';
import bcrypt from 'bcrypt';
import config from '../../config';

export const userSchema = new Schema<TUser, UserModel>(
  {
    name: {
      type: String,
      required: [
        true,
        'Name is required. Please provide the necessary information.',
      ],
      trim: true,
    },
    email: {
      type: String,
      required: [
        true,
        'Email is required. Please provide the necessary information.',
      ],
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'Password is required.'],
      trim: true,
      select: 0,
    },
    role: {
      type: String,
      enum: ['admin', 'user'],
      default: 'user',
    },
    isBlocked: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

// hashed password before save the database
userSchema.pre('save', async function (next) {
  this.password = await bcrypt.hash(
    this.password,
    Number(config.bcrypt_salt_rounds),
  );
  next();
});

userSchema.statics.isUserExists = async function (email: string) {
  return await User.findOne({ email: email }).select('+password');
};

userSchema.statics.isPasswordMatched = async function (
  plainTextPassword,
  hashPassword,
) {
  return await bcrypt.compare(plainTextPassword, hashPassword);
};

export const User = model<TUser, UserModel>('User', userSchema);
