import { z } from 'zod';

const registerUserValidationSchema = z.object({
  body: z.object({
    name: z.string(),
    email: z.string(),
    password: z.string(),
    role: z.enum(['admin', 'user']).default('user'),
    isBlocked: z.boolean().default(false),
  }),
});

const updateRegisterUserValidationSchema = z.object({
  body: z.object({
    name: z.string().optional(),
    email: z.string().optional(),
    password: z.string().optional(),
    role: z.enum(['admin', 'user']).default('user').optional(),
    isBlocked: z.boolean().default(false).optional(),
  }),
});

export const userValidationSchema = {
  registerUserValidationSchema,
  updateRegisterUserValidationSchema,
};

export const loginValidationSchema = z.object({
  body: z.object({
    email: z.string(),
    password: z.string(),
  }),
});
