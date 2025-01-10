import { QueryBuilder } from '../../builder/QueryBuilder';
import { AppError } from '../../errors/AppError';
import { User } from '../user/user.model';
import { blogSearchableFields } from './blog.constant';
import { TBlog } from './blog.interface';
import { Blog } from './blog.model';

// Create Blog Into Database
const createBlogIntoDB = async (payload: TBlog, userEmail: string) => {
  const user = await User.isUserExists(userEmail);

  if (!user) {
    throw new AppError(404, 'User not found!');
  }

  const userId = user?._id;
  const blogData = { ...payload, author: userId };
  const result = await Blog.create(blogData);
  return result;
};

// Get all blog into Database
const getAllBlogsFromDB = async (query: Record<string, unknown>) => {
  const blogQuery = new QueryBuilder(Blog.find().populate('author'), query)
    .search(blogSearchableFields)
    .filter()
    .sortBy();
  const result = await blogQuery.modelQuery;
  if (!result.length) {
    throw new AppError(404, 'No blogs found!');
  }
  return result;
};

// Update blog from Database
const updateBlogIntoDB = async (
  id: string,
  userEmail: string,
  payload: Partial<TBlog>,
) => {
  // check user is exists
  const user = await User.isUserExists(userEmail);

  if (!user) {
    throw new AppError(403, 'User not found! You cannot update the blog.');
  }

  // check blog is exists
  const blog = await Blog.findById(id);

  if (!blog) {
    throw new AppError(404, 'Blog not found! You cannot update it.');
  }

  // check the owner

  if (blog.author.toString() !== user._id.toString()) {
    throw new AppError(
      403,
      'You are not the owner of this blog and cannot update it.',
    );
  }

  const result = await Blog.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });

  return result;
};

// delete blog service
const deleteBlogFromDB = async (id: string, userEmail: string) => {
  // check user is exists
  const user = await User.isUserExists(userEmail);

  if (!user) {
    throw new AppError(403, 'User not found! You cannot delete the blog.');
  }

  // check blog is exists
  const blog = await Blog.findById(id);

  if (!blog) {
    throw new AppError(404, 'Blog not found!');
  }

  // check owner
  if (user._id.toString() !== blog?.author.toString()) {
    throw new AppError(401, 'You are not authorized to delete this blog!');
  }

  const result = await Blog.findByIdAndUpdate(
    id,
    { isDeleted: true },
    { new: true, runValidators: true },
  );

  return result;
};

export const BlogServices = {
  createBlogIntoDB,
  getAllBlogsFromDB,
  updateBlogIntoDB,
  deleteBlogFromDB,
};
