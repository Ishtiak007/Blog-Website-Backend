import { NextFunction, Request, Response } from 'express';
import { catchAsync } from '../utils/catchAsync';
import { AppError } from '../errors/AppError';
import jwt, { JwtPayload } from 'jsonwebtoken';
import config from '../config';
import { TUserRole } from '../modules/user/user.interface';
import { User } from '../modules/user/user.model';

export const auth = (...requiredRoles: TUserRole[]) => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer')) {
      throw new AppError(401, 'Invalid Credentials');
    }

    const token = authHeader.split(' ')[1];
    // console.log(token);
    if (!token) {
      throw new AppError(401, 'Invalid credentials');
    }

    // decoded token
    const decoded = jwt.verify(
      token,
      config.access_token_secret as string,
    ) as JwtPayload;

    const { email, role } = decoded;
    // console.log(decoded)

    // check if the use is exists
    const user = await User.isUserExists(email);
    if (!user) {
      throw new AppError(404, 'The user is not found!!');
    }

    // check if the user is blocked
    if (user.isBlocked === true) {
      throw new AppError(403, 'Your account has been blocked!!');
    }

    if (requiredRoles && !requiredRoles.includes(role)) {
      throw new AppError(403, 'Insufficient permissions');
    }

    req.user = decoded as JwtPayload;
    next();
  });
};
