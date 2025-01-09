import { RequestHandler } from 'express';
import { sendResponse } from '../../utils/sendResponse';
import { catchAsync } from '../../utils/catchAsync';

const createBlog: RequestHandler = catchAsync(async (req, res) => {
  const userEmail = req?.user?.email;

  const result = await BlogServices.createBlogIntoDB(req.body, userEmail);

  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: 'Blog created successfully',
    data: result,
  });
});

export const BlogControllers = {
  createBlog,
};
