import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

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
    <html lang="zh-CN">
      <body
        className={`antialiased flex flex-col items-center bg-zinc-50 h-screen`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
