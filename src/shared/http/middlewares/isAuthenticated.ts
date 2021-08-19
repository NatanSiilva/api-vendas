import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';
import AppError from '@shared/errors/AppError';
import authConfig from '@config/auth';

interface ITokenPayload {
  iat: number;
  exp: number;
  sub: string;
  name: string;
  id: string;
}

export default function isAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction,
): void {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    throw new AppError('JWT Token is missing.');
  }

  const [, token] = authHeader.split(' ');

  try {
    const decodedToken = verify(token, authConfig.jwt.secret);

    if (!decodedToken) {
      throw new AppError('JWT Token is invalid.');
    }

    const { id } = decodedToken as ITokenPayload;

    req.user = {
      id,
    };

    return next();
  } catch (error) {
    throw new AppError('JWT Token is invalid.');
  }
}
