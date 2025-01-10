import express from 'express';
import { validateRequest } from '../../middlewares/validateRequest';
import { loginValidationSchema, userValidationSchema } from './user.validation';
import { UserControllers } from './user.controller';

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

export const UserRoutes = router;
