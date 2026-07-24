import type { Metadata } from "next";
import {
  Geist_Mono,
  Plus_Jakarta_Sans,
} from "next/font/google";
import { Toaster } from "sonner";

import { AuthProvider } from "@/components/providers/session-provider";

import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Studify",
  description: "Organize e acompanhe seus estudos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${plusJakartaSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body>
        <AuthProvider>{children}</AuthProvider>

        <Toaster
          richColors
          position="top-right"
        />
      </body>
    </html>
  );
}