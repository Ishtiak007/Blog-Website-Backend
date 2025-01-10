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

// update single blog
const updateBlog: RequestHandler = catchAsync(async (req, res) => {
  const id = req.params.id;
  const updatedData = req.body;
  const userEmail = req?.user?.email;

  const result = await BlogServices.updateBlogIntoDB(
    id,
    userEmail,
    updatedData,
  );

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Blog updated successfully',
    data: result,
  });
});

// delete a blog
const deleteBlog: RequestHandler = catchAsync(async (req, res) => {
  const id = req.params.id;
  const userEmail = req?.user?.email;
  await BlogServices.deleteBlogFromDB(id, userEmail);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Blog deleted successfully',
    data: {},
  });
});

export const BlogControllers = {
  createBlog,
  getAllBlogs,
  updateBlog,
};
