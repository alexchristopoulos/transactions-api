import { RequestError } from './RequestError';

export class UnknownError extends RequestError {
  statusCode = 522;

  constructor() {
    super('Unknown error occurred', 'Unknown error');

    Object.setPrototypeOf(this, UnknownError.prototype);
  }
}
