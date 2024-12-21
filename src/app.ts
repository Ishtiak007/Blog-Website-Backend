import express, { Application, Request, Response } from 'express';
const app: Application = express();
import cors from 'cors';

// Parsers
app.use(express.json());
app.use(cors());

app.get('/', (req: Request, res: Response) => {
  res.send(
    'Hello developers, I am Ishtiak From Rangpur, I am developing PH-University 🦄!',
  );
});

export default app;
