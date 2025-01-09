import { RequestHandler } from 'express';
import { sendResponse } from '../../utils/sendResponse';
import { catchAsync } from '../../utils/catchAsync';
import { BlogServices } from './blog.service';

// create blog controller
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

// get all blog controller
const getAllBlogs: RequestHandler = catchAsync(async (req, res) => {
  const query = req.query;
  const result = await BlogServices.getAllBlogsFromDB(query);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Blogs fetched successfully',
    data: result,
  });
});

export const BlogControllers = {
  createBlog,
  getAllBlogs,
};
