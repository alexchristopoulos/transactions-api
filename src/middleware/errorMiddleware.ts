import { NextFunction, Request, Response } from 'express';
import { RequestError } from 'utils/errors/RequestError';
import { UnknownError } from 'utils/errors/UnknownError';

export const errorMiddleware = (
  err: Error,
  req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  next: NextFunction,
) => {
  if (err instanceof RequestError)
    return res.status(err.getStatusCode()).json(err.serialize());
  else {
    const unknownError = new UnknownError();
    return res
      .status(unknownError.getStatusCode())
      .json(unknownError.serialize());
  }
};
