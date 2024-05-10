import { ValidationError } from 'joi';

import { RequestError } from './RequestError';

export class BadRequestError extends RequestError {
  statusCode = 400;
  private error;

  constructor(error: ValidationError) {
    super('Bad request', 'BadRequestError');
    this.error = error;
    Object.setPrototypeOf(this, BadRequestError.prototype);
  }

  serialize() {
    return {
      code: this.getErrorCode(),
      detail: this.error.details.map((detail) => ({
        field: detail.path.toString(),
        cause: detail.message,
      })),
    };
  }
}
