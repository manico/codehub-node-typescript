export class HttpException {
  public code: number;

  public message: string;

  public details: any;

  constructor(code: number, message: string, details: Array<object>) {
    this.code = code;
    this.message = message;
    this.details = details;
  }
}
