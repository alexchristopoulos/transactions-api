import { RequestError } from './RequestError';

export class NotFoundError extends RequestError {
  statusCode = 404;

  constructor(message: string, errorCode: string) {
    super(message, errorCode);

    Object.setPrototypeOf(this, NotFoundError.prototype);
  }
}
