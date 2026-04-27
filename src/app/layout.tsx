import type { Metadata, Viewport } from "next";
import "./globals.css";
import ToasterClient from "@/components/layout/ToasterClient";
import { ThemeProvider } from "@/providers/ThemeProvider";

export const metadata: Metadata = {
  title: "Flamingo Hải Tiến",
  description: "Flamingo Hải Tiến",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning data-scroll-behavior="smooth">
        <ThemeProvider attribute="class" enableSystem>
          {children}
          <ToasterClient />
        </ThemeProvider>
      </body>
    </html>
  );
}
