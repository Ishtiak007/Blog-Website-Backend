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

// user login
const loginUser: RequestHandler = catchAsync(async (req, res) => {
  const result = await UserServices.loginUser(req.body);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Login successful',
    data: result,
  });
});

// update (block a user)
const blockUser: RequestHandler = catchAsync(async (req, res) => {
  const userId = req.params.userId;
  const updatedData = req.body;
  const result = await UserServices.blockUserIntoDB(userId, updatedData);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'User blocked successfully',
    data: result,
  });
});

// User delete
const deleteBlog: RequestHandler = catchAsync(async (req, res) => {
  const id = req.params.id;
  await UserServices.deleteBlogFromDB(id);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Blog deleted successfully',
    data: {},
  });
});

export const UserControllers = {
  registerUser,
  loginUser,
  blockUser,
  deleteBlog,
};
