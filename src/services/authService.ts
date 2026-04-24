import {
  User,
  LoginCredentials,
  RegisterResponse,
  RegisterRequest,
  ForgotPasswordRequest,
  ResetPasswordRequest,
  ChangePasswordRequest,
  VerifyEmailRequest,
  GoogleLoginRequest,
} from "@/types/auth";
import { get, post } from "@/utils/httpRequest";

// Example service file copied from source project for template reference.
const authService = {
  me: async () => {
    return await get<User>("api/auth/me");
  },

  register: async (data: RegisterRequest) => {
    return await post<RegisterResponse>("api/auth/register", data);
  },

  login: async (data: LoginCredentials) => {
    return await post<User>("api/auth/login", data);
  },

  logout: async () => {
    return await post<void>("api/auth/logout");
  },

  forgotPassword: async (data: ForgotPasswordRequest) => {
    return await post<void>("api/auth/forgot-password", data);
  },

  resetPassword: async (data: ResetPasswordRequest) => {
    return await post<void>("api/auth/reset-password", data);
  },

  changePassword: async (data: ChangePasswordRequest) => {
    return await post<void>("api/auth/change-password", data);
  },

  verifyEmail: async (data: VerifyEmailRequest) => {
    return await post<void>("api/auth/verify-email", data);
  },

  googleLogin: async (data: GoogleLoginRequest) => {
    return await post<User>("api/auth/google-login", data);
  },
};

export default authService;
