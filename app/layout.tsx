import type { Metadata } from "next";
import { Grand_Hotel } from "next/font/google";
import "./globals.css";

const grandHotel = Grand_Hotel({
  variable: "--font-logo",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Login • Instagram",
  description:
    "Welcome back to Instagram. Sign in to see photos and videos from your friends.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={grandHotel.variable}>
      <body>{children}</body>
    </html>
  );
}
