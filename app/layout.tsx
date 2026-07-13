import type { Metadata } from "next";
import "./globals.css";
import LenisProvider from "@/providers/LenisProvider";
import Navbar from "@/components/layout/Navbar";

export const metadata: Metadata = {
  title: "Binam Shrestha",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`h-dvh antialiased overflow-hidden`}>
      <body className="h-dvh flex flex-col overflow-hidden">
        <LenisProvider>
          <Navbar />
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
