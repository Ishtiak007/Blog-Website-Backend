import express from 'express';
import { auth } from '../../middlewares/auth';
import { validateRequest } from '../../middlewares/validateRequest';
import { blogValidationSchema } from './blog.validation';
import { USER_ROLE } from '../user/user.constant';
import { BlogControllers } from './blog.controller';

const router = express.Router();

router.post(
  '/',
  auth(USER_ROLE.user),
  validateRequest(blogValidationSchema.createBlogValidationSchema),
  BlogControllers.createBlog,
);

router.get('/', BlogControllers.getAllBlogs);

router.patch(
  '/:id',
  auth(USER_ROLE.user),
  validateRequest(blogValidationSchema.updateBlogValidationSchema),
  BlogControllers.updateBlog,
);

export const BlogRoutes = router;
