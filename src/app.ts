import express from 'express';
import cors from 'cors';
import { router } from './app/routes';
import { globalErrorHandler } from './app/middlewares/globalErrorHandler';
import { notFound } from './app/middlewares/notFound';

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello,I am Ishtiak. From Rangpur. My Blog Server is running⚡');
});
app.use('/api', router);
app.use(globalErrorHandler);
app.use(notFound);

export default app;
