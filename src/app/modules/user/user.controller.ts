import { RequestHandler } from 'express';
import { catchAsync } from '../../utils/catchAsync';
import { sendResponse } from '../../utils/sendResponse';
import { UserServices } from './user.service';

// user register
const registerUser: RequestHandler = catchAsync(async (req, res) => {
  const result = await UserServices.registerUserIntoDB(req.body);
  const { _id, name, email } = result;

  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: 'User registered successfully',
    data: {
      _id,
      name,
      email,
    },
  });
});

export const UserControllers = {
  registerUser,
};
