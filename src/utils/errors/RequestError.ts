type SerializeResult = {
  code: string;
  detail: string | object;
};

export abstract class RequestError extends Error {
  private errorCode: string;
  abstract statusCode: number;

  constructor(message: string, errorCode: string) {
    super(message);

    this.errorCode = errorCode;
    this.message = message;

    Object.setPrototypeOf(this, RequestError.prototype);
    Error.captureStackTrace(this);
  }

  getErrorCode() {
    return this.errorCode;
  }

  getStatusCode() {
    return this.statusCode;
  }

  serialize(): SerializeResult {
    return {
      code: this.errorCode,
      detail: this.message,
    };
  }
}
