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

export const BlogServices = {
  createBlogIntoDB,
  getAllBlogsFromDB,
};
