import dotenv from 'dotenv';
import express, { NextFunction, Request, response, Response } from 'express';
import cors from 'cors';
import routes from '@shared/http/routes/index';
import AppError from '@shared/errors/AppError';

const app = express();

dotenv.config();

app.use(cors());
app.use(express.json());

app.use(routes);

app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
  if (error instanceof AppError) {
    return res.status(error.statusCode).json({
      status: 'error',
      message: error.message,
    });
  }

  console.log(`Error internal do sistemas ===> ${error}`);

  return res.status(500).json({
    status: 'error',
    message: 'Internal server error',
  });
});

app.listen(3333, () => {
  console.log('Server started on http://localhost:3333, 🏆');
});
