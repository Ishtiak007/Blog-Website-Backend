import { AppError } from '../../errors/AppError';
import { User } from '../user/user.model';
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

export const BlogServices = {
  createBlogIntoDB,
};
