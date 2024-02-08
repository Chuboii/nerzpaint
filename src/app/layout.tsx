import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Script from "next/script";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}  cz-shortcut-listen="true">
        <Navbar/>
          {children}
        
        <Script src="https://kit.fontawesome.com/20b8edb75e.js" crossOrigin="anonymous"></Script>
      </body>
    </html>
  );
}
