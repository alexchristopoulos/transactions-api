import { RequestError } from './RequestError';

export class BadRequest extends RequestError {
  statusCode = 400;

  constructor(message: string, errorCode: string) {
    super(message, errorCode);

    Object.setPrototypeOf(this, BadRequest.prototype);
  }
}
