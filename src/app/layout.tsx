import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "فراز انرژی اطلس | نیروگاه خورشیدی",
  description: "طراحی و احداث انواع نیروگاه‌های خورشیدی",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <head>
        <link
          href="https://cdn.jsdelivr.net/gh/rastikerdar/vazirmatn@v33.003/Vazirmatn-font-face.css"
          rel="stylesheet"
        />
      </head>
      <body style={{ fontFamily: "Vazirmatn, sans-serif" }}>{children}</body>
    </html>
  );
}
