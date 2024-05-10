import { NextFunction, Request, Response } from 'express';
import { Schema, ValidationError } from 'joi';
import { BadRequestError } from 'utils/errors/BadRequestError';

export const validateRequest =
  (schema: Schema, data?: Record<string | number | symbol, unknown>) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.validateAsync(data ? data : req.body);
      return next();
    } catch (err) {
      throw new BadRequestError(err as ValidationError);
    }
  };
