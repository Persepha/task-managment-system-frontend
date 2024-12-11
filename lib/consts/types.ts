export interface ErrorResponse {
    message: string;
    extra: {
      [key: string]: any;
    };
  }