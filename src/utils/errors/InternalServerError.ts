import { RequestError } from './RequestError';

export class InternalServerError extends RequestError {
  statusCode = 500;

  constructor(message: string, errorCode: string) {
    super(message, errorCode);

    Object.setPrototypeOf(this, InternalServerError.prototype);
  }
}
