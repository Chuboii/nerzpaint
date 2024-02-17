import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Script from "next/script";
import Footer from "@/components/footer/Footer";
import StyledComponentsRegistry from "./registry";
import ScrollUp from "@/components/scroll up/ScrollUp";
import {Body } from './HomeStyles.style'

const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "Nerzpaints",
  description: "Nerzpaint emerges as a dynamic force within the paint industry. Find a colour right for your interior and exterior designs",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
 

  return (
    <html lang="en">
      <meta name="robots" content="index,follow" />
      <meta property="og:description" content="Nerzpaint emerges as a dynamic force within the paint industry. Find a colour right for your interior and exterior designs."/>
      <meta property="og:url" content="https://nerzpaints.com"/>
      <Body className={inter.className} cz-shortcut-listen="true">
       <StyledComponentsRegistry>
         <Navbar />
          {children}
          <ScrollUp />
          <Footer />
         </StyledComponentsRegistry>
      <Script src="https://kit.fontawesome.com/20b8edb75e.js" crossOrigin="anonymous"></Script>
    </Body>

    </html>
  );
}
