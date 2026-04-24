export interface User {
  userId: string;
  fullName?: string;
  name?: string;
  email?: string;
  role?: string;
  locationId?: string | null;
  locationName?: string | null;
  avatar?: string;
  user_id?: string;
  location_id?: string;
  phone?: string;
  gender?: string;
  dob?: string;
  avatarUrl?: string;
  socialLinks?: string;
  address?: string;
  interests?: string | string[];
  skills?: string;
  personalityTraits?: string | string[];
  introduction?: string;
  cvUrl?: string;
  note?: string;
}

export interface RegisterRequest {
  username: string;
  email: string;
  password: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
  rememberMe?: boolean;
}

export interface ForgotPasswordRequest {
  email: string;
}

export interface ResetPasswordRequest {
  token: string;
  newPassword: string;
}

export interface ChangePasswordRequest {
  oldPassword: string;
  newPassword: string;
}

export interface VerifyEmailRequest {
  token: string;
}

export interface GoogleLoginRequest {
  idToken: string;
  email?: string;
  name?: string;
}

export interface RegisterResponse {
  email: string;
  fullName: string;
  role: string;
  userId: string;
  locationId: string | null;
  locationName: string | null;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
  _hasHydrated: boolean;
  setHasHydrated: (val: boolean) => void;
  login: (user: User) => void;
  logout: () => Promise<void>;
  updateUser: (userData: Partial<User>) => void;
  setLoading: (isLoading: boolean) => void;
}

export interface ResetPasswordFormProps {
  token: string;
}

export interface ForgotPasswordFormData {
  email: string;
}

export interface ResetPasswordFormData {
  newPassword: string;
  confirmPassword?: string;
}

export interface LoginFormData {
  email: string;
  password: string;
}
