export const routes = {
  // Main pages
  home: "/",
  rooms: "/rooms",
  roomDetail: (slug: string) => `/rooms/${slug}`,
  offers: "/offer",
  blog: "/blog",
  contact: "/contact",

  // Auth pages
  login: "/login",
  register: "/register",
  forgotPassword: "/forgot-password",
  resetPassword: "/reset-password",
  verifyEmail: "/verify-email",
} as const satisfies Record<string, string | ((...args: string[]) => string)>;

export type RoutePath = string;

export const navItems = [
  { label: "Trang chủ", href: "/" },
  { label: "Phòng & Villa", href: "/rooms" },
  { label: "Ưu đãi", href: "/offer" },
  { label: "Cẩm nang", href: "/blog" },
  { label: "Liên hệ", href: "/contact" },
] as const satisfies ReadonlyArray<{ label: string; href: string }>;
