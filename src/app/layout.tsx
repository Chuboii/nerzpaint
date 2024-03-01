import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Script from "next/script";
import Footer from "@/components/footer/Footer";
import StyledComponentsRegistry from "./registry";
import ScrollUp from "@/components/scroll up/ScrollUp";
import {Body } from './HomeStyles.style'
import { GlobalStyles } from "./globalStyles";
import { ProductProvider } from "@/context/ProductContext";

const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "Nerzpaints - Interior and Exterior Paint Designs",
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
      <meta name="keywords" content="paints paint product home comfort painting painter shop" />
     
      <Body className={inter.className} cz-shortcut-listen="true">
        <StyledComponentsRegistry>
          <ProductProvider>
          <GlobalStyles overflow=""/>
          <Navbar />
            {children}
          <ScrollUp />
            <Footer />
          </ProductProvider>
         </StyledComponentsRegistry>
      <Script src="https://kit.fontawesome.com/20b8edb75e.js" crossOrigin="anonymous"></Script>
    </Body>

    </html>
  );
}
