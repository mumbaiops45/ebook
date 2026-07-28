import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import ScrollProgress from "@/components/ScrollProgress";
import GoogleTranslateScript from "@/components/GoogleTranslateScript";
import WhatsappChat from "@/components/WhatsappChat";

import { getServerTranslation } from "@/lib/getServerTranslation";

export async function generateMetadata() {
  const { t } = await getServerTranslation("home");

  return {
    title: t("meta_title"),
    description: t("meta_description"), 
    keywords: [
      "Salil Javeri",
      "Salil Javeri Books",
      "Samanta Samajik Vicharanchi",
      "Thoughts on Social Equality",
      "Social Equality Book",
      "eBooks",
      "Audiobooks",
      "Marathi Books",
      "Hindi Books",
      "English Books",
      "Self Discovery Stories",
      "Human Emotions Books"
    ],
    icons: {
      icon: "/WeServe/hindi.png",
      shortcut: "/WeServe/hindi.png",
      apple: "/WeServe/hindi.png",
    },
  };
  // read Google translate cookie
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://translate.google.com" />
        <link rel="dns-prefetch" href="https://translate.google.com" />
      </head>
      <body className="bg-[var(--secondary)]">
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