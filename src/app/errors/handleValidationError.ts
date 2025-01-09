import mongoose, { CastError } from 'mongoose';
import { TError, TGenericErrorResponse } from '../interface/error';

export const handleValidationError = (
  err: mongoose.Error.ValidationError,
): TGenericErrorResponse => {
  const error: TError = Object.values(err.errors).map(
    (value: mongoose.Error.ValidatorError | CastError) => {
      return {
        path: value?.path,
        message: value?.message,
      };
    },
  );

  const statusCode = 400;

  return {
    statusCode,
    message: 'Validation Error',
    error,
  };
};
