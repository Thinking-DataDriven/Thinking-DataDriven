import type { Metadata } from "next";

import "@/app/globals.css";

export const metadata: Metadata = {
  title: "Thinking OS",
  description: "MVP personal thinking system for MindOS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
