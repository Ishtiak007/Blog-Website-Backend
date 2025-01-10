import express from 'express';
import { auth } from '../../middlewares/auth';
import { validateRequest } from '../../middlewares/validateRequest';
import { blogValidationSchema } from './blog.validation';
import { USER_ROLE } from '../user/user.constant';
import { BlogControllers } from './blog.controller';

const router = express.Router();

// blog post
router.post(
  '/',
  auth(USER_ROLE.user),
  validateRequest(blogValidationSchema.createBlogValidationSchema),
  BlogControllers.createBlog,
);

// get all blog
router.get('/', BlogControllers.getAllBlogs);

// update
router.patch(
  '/:id',
  auth(USER_ROLE.user),
  validateRequest(blogValidationSchema.updateBlogValidationSchema),
  BlogControllers.updateBlog,
);

// delete blog
router.delete('/:id', auth(USER_ROLE.user), BlogControllers.deleteBlog);

export const BlogRoutes = router;
