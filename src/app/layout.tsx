import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tea Chill",
  description: "Tea Chill es una tienda de té online",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`relative mx-auto ${inter.className}`}>
        <div>
          {children}
        </div>
      </body>
    </html>
  );
}
