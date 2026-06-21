export interface ApiResponse<T> {
  success: boolean;
  message?: string;
  data: T;
  errors?: ApiError[];
}

export interface ApiError {
  field?: string;
  message: string;
}