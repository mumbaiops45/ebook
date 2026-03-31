import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import ScrollProgress from "@/components/ScrollProgress";
import GoogleTranslateScript from "@/components/GoogleTranslateScript";

import WhatsappChat from "@/components/WhatsappChat";


export const metadata = {
  title: "SALIL JAVERI",
  description: "Salil Javeri writes stories that explore human emotions, personal growth, and the journey of self-discovery",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <head>
        <link rel="preconnect" href="https://translate.google.com" />
        <link rel="dns-prefetch" href="https://translate.google.com" />
      </head>
      <body className="bg-[var(--secondary)]"
        
      >
         <GoogleTranslateScript />
        <div
  id="google_translate_element"
  style={{
    position: "absolute",
    top: "-9999px",
    left: "-9999px",
    visibility: "hidden",
    height: 0,
    overflow: "hidden",
  }}
></div>
          <ScrollProgress />  
        <Navbar />
        {children}
        <ScrollToTop/>
         
        <Footer />
          <WhatsappChat/>
      </body>
    </html>
  );
}
