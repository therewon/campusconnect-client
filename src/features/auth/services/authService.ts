import { axiosInstance } from "../../../api/axiosInstance";
import type {
  LoginRequest,
  LoginResponse,
  RegisterRequest,
} from "../types/auth.types";

function unwrapResponse<T>(responseData: any): T {
  return responseData?.data ?? responseData;
}

export const authService = {
  async login(data: LoginRequest): Promise<LoginResponse> {
    const response = await axiosInstance.post("/auth/login", data);

    return unwrapResponse<LoginResponse>(response.data);
  },

  async register(data: RegisterRequest) {
    const response = await axiosInstance.post("/auth/register", data);

    return unwrapResponse(response.data);
  },
};