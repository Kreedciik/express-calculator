export class HttpError extends Error {
  statusCode: number;
  message: string;
  constructor(statusCode: number, message: string) {
    super(message);
    this.statusCode = statusCode;
    this.message = message;
  }

  toJSON() {
    return { result: this.message, statusCode: this.statusCode };
  }
}
