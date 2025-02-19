import config from '../../config';
import { AppError } from '../../errors/AppError';
import { TLoginUser, TUser } from './user.interface';
import jwt from 'jsonwebtoken';
import { User } from './user.model';
import { Blog } from '../blog/blog.model';

// Register User Into DB
const registerUserIntoDB = async (payload: TUser) => {
  const user = await User.isUserExists(payload?.email);

  if (user) {
    throw new AppError(400, 'Email is already exists!');
  }
  const result = await User.create(payload);
  return result;
};

// User login into db
const loginUser = async (payload: TLoginUser) => {
  const user = await User.isUserExists(payload?.email);
  if (!user) {
    throw new AppError(404, 'The user is not found!');
  }

  if (user.isBlocked === true) {
    throw new AppError(403, 'Your account has been blocked.');
  }
  if (!(await User.isPasswordMatched(payload?.password, user?.password))) {
    throw new AppError(401, 'Invalid credentials!');
  }
  const jwtPayload = {
    email: user?.email,
    role: user?.role,
  };

  const token = jwt.sign(jwtPayload, config.access_token_secret as string, {
    expiresIn: config.access_token_expires_in,
  });

  return {
    token,
  };
};

// update user form DB
const blockUserIntoDB = async (userId: string, payload: Partial<TUser>) => {
  const user = await User.findOne({ _id: userId });

  if (!user) {
    throw new AppError(404, 'User not found!');
  }
  if (user?.role !== 'user') {
    throw new AppError(403, "Only 'user' roles can be blocked!");
  }

  if (user.isBlocked === true) {
    throw new AppError(
      400,
      'This user is already blocked and cannot be blocked again.',
    );
  }

  const result = await User.findByIdAndUpdate(userId, payload, {
    new: true,
    runValidators: true,
  });
  return result;
};

// delete blog from DB
const deleteBlogFromDB = async (id: string) => {
  const blog = await Blog.findById(id);
  if (!blog) {
    throw new AppError(404, 'Blog not found!');
  }
  const result = await Blog.findByIdAndUpdate(id, { isDeleted: true });
  return result;
};

export const UserServices = {
  registerUserIntoDB,
  loginUser,
  blockUserIntoDB,
  deleteBlogFromDB,
};
