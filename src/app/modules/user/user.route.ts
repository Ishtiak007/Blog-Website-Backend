import express from 'express';
import { validateRequest } from '../../middlewares/validateRequest';
import { loginValidationSchema, userValidationSchema } from './user.validation';
import { UserControllers } from './user.controller';
import { auth } from '../../middlewares/auth';
import { USER_ROLE } from './user.constant';

const router = express.Router();

// user register
router.post(
  '/register',
  validateRequest(userValidationSchema.registerUserValidationSchema),
  UserControllers.registerUser,
);

// User login
router.post(
  '/login',
  validateRequest(loginValidationSchema),
  UserControllers.loginUser,
);

// Update user
router.patch(
  '/users/:userId/block',
  auth(USER_ROLE.admin),
  validateRequest(userValidationSchema.updateRegisterUserValidationSchema),
  UserControllers.blockUser,
);

// Delete user
router.delete('/blogs/:id', auth(USER_ROLE.admin), UserControllers.deleteBlog);

export const UserRoutes = router;
