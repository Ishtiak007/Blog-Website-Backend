import express from 'express';

export const router = express.Router();

const moduleRoutes = [
  {
    path: '/blogs',
    // route: ,
  },
  {
    path: '/auth',
    // route: ,
  },
  {
    path: '/admin',
    // route: ,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));
