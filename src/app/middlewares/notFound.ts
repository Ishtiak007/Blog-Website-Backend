import { Request, Response } from 'express';
import express from 'express';

export const notFound = ((req: Request, res: Response) => {
  return res.status(404).json({
    success: false,
    message: 'SORRY, This is Route not found!!',
    error: {
      path: `This requested endpoint ${req.originalUrl} does'nt exists`,
      message: 'SORRY, This is Route not found!!',
    },
    stack: '',
  });
}) as unknown as express.ErrorRequestHandler;
