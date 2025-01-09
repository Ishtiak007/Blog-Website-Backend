/* eslint-disable @typescript-eslint/no-explicit-any */
import { TError, TGenericErrorResponse } from '../interface/error';

export const handleDuplicateError = (err: any): TGenericErrorResponse => {
  const match = err.message.match(/"([^"]*)"/);

  const extracedMessage = match && match[1];

  const error: TError = [
    {
      path: '',
      message: `${extracedMessage} is already exist!!`,
    },
  ];

  const statusCode = 400;

  return {
    statusCode,
    message:
      'Duplicate key detected: This entry conflicts with an already existing one.',
    error,
  };
};
