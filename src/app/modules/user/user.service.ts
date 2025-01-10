import { AppError } from '../../errors/AppError';
import { TUser } from './user.interface';
import { User } from './user.model';

// Register User Into DB
const registerUserIntoDB = async (payload: TUser) => {
  const user = await User.isUserExists(payload?.email);

  if (user) {
    throw new AppError(400, 'Email is already exists!');
  }
  const result = await User.create(payload);
  return result;
};

export const UserServices = {
  registerUserIntoDB,
};
