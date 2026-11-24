import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "فراز انرژی اطلس | سامانه‌های خورشیدی",
  description: "پکیج‌های نیروگاه خورشیدی آنگرید، آفگرید و هیبرید و مشاورهٔ پمپاژ خورشیدی چاه‌های کشاورزی.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return <html lang="fa" dir="rtl"><body>{children}</body></html>;
}
