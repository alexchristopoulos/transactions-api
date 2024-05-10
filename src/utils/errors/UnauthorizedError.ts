import { RequestError } from './RequestError';

export class UnauthorizedError extends RequestError {
  statusCode = 401;

  constructor(message: string, errorCode: string) {
    super(message, errorCode);

    Object.setPrototypeOf(this, UnauthorizedError.prototype);
  }
}
