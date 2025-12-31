import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Next 16教程",
  description: "Next 16教程",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
