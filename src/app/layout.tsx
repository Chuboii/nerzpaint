import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Script from "next/script";
import Footer from "@/components/footer/Footer";
import StyledComponentsRegistry from "./registry";
import ScrollUp from "@/components/scroll up/ScrollUp";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nerzpaints",
  description: "Find a colour right for you",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en">
      <body className={inter.className}  cz-shortcut-listen="true">
      <StyledComponentsRegistry>
        <Navbar />
          {children}
        <ScrollUp />
          <Footer />
          </StyledComponentsRegistry>
        <Script src="https://kit.fontawesome.com/20b8edb75e.js" crossOrigin="anonymous"></Script>
        </body>

    </html>
  );
}
