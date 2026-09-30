import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Arka Putra Yazaka — Developer",
  description:
    "Portfolio of Arka Putra Yazaka — Frontend Developer & Informatics Student.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"
          strategy="beforeInteractive"
        />
      </head>

      <body>{children}</body>
    </html>
  );
}