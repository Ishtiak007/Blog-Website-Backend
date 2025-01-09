/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from 'express';
import { TError } from '../interface/error';
// import { handleZodError } from "../errors/handleZodError";
import config from '../config';
import express from 'express';
import { ZodError } from 'zod';
import { handleZodError } from '../errors/handleZodError';
import { handleDuplicateError } from '../errors/handleDuplicateError';
import { handleValidationError } from '../errors/handleValidationError';
import { handleCastError } from '../errors/handleCastError';
import { AppError } from '../errors/AppError';

export const globalErrorHandler = ((
  err: any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  let statusCode = err.statusCode || 500;
  let message = err.message || 'Internal server error';

  let error: TError = [
    {
      path: '',
      message: '',
    },
  ];

  if (err instanceof ZodError) {
    const simplifiedError = handleZodError(err);

    statusCode = simplifiedError?.statusCode;
    message = simplifiedError?.message;
    error = simplifiedError?.error;
  } else if (err?.code === 11000) {
    const simplifiedError = handleDuplicateError(err);

    statusCode = simplifiedError?.statusCode;
    message = simplifiedError?.message;
    error = simplifiedError?.error;
  } else if (err?.name === 'ValidationError') {
    const simplifiedError = handleValidationError(err);

    statusCode = simplifiedError?.statusCode;
    message = simplifiedError?.message;
    error = simplifiedError?.error;
  } else if (err?.name === 'CastError') {
    const simplifiedError = handleCastError(err);

    statusCode = simplifiedError?.statusCode;
    message = simplifiedError?.message;
    error = simplifiedError?.error;
  } else if (err instanceof AppError) {
    statusCode = err?.statusCode;
    message = err?.message;
    error = [
      {
        path: '',
        message: err?.message,
      },
    ];
  } else if (err instanceof Error) {
    error = [
      {
        path: '',
        message: err?.message,
      },
    ];
  }

  return res.status(statusCode).json({
    success: false,
    message: message,
    statusCode: statusCode,
    error: error,
    stack: config.node_env === 'development' ? err?.stack : null,
  });
}) as unknown as express.ErrorRequestHandler;
