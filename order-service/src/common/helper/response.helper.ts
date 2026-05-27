export class ResponseHelper {
  static success<T>(
    args: { data: T | null; message?: string; statusCode?: number } = {
      data: null,
      message: 'Success',
      statusCode: 200,
    },
  ) {
    return args;
  }
}
