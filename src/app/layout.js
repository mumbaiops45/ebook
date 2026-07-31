import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import ScrollProgress from "@/components/ScrollProgress";
import GoogleTranslateScript from "@/components/GoogleTranslateScript";
import WhatsappChat from "@/components/WhatsappChat";

import { getServerTranslation } from "@/lib/getServerTranslation";

// Replace with your actual domain name
const SITE_URL = "https://www.saliljaveri.com"; 

export async function generateMetadata() {
  const { t } = await getServerTranslation("home");

  const pageTitle = t("meta_title") || "Salil Javeri - Books & Thoughts on Social Equality";
  const pageDescription = t("meta_description") || "Explore Marathi, Hindi, and English books by Salil Javeri on social equality, self-discovery, and human emotions.";

  return {
    // 1. Crucial for relative metadata URLs
    metadataBase: new URL(SITE_URL),

    title: {
      default: pageTitle,
      template: "%s | Salil Javeri",
    },
    description: pageDescription,
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
    
    // 2. Canonical URL setup
    alternates: {
      canonical: "/",
    },

    // 3. OpenGraph for WhatsApp, Facebook, LinkedIn sharing
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: SITE_URL,
      siteName: "Salil Javeri Books",
      images: [
        {
          url: "/WeServe/hindi.png", // Change to a high-res Book Cover Image (1200x630px recommended)
          width: 1200,
          height: 630,
          alt: "Salil Javeri Book Cover",
        },
      ],
      locale: "en_US",
      type: "website",
    },

    // 4. Twitter Card Metadata
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
      images: ["/WeServe/hindi.png"],
    },

    // 5. Indexing instructions for Googlebot
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },

    icons: {
      icon: "/WeServe/hindi.png",
      shortcut: "/WeServe/hindi.png",
      apple: "/WeServe/hindi.png",
    },
  };
}

export default function RootLayout({ children }) {
  // 6. Schema.org JSON-LD for Book & Person Entity
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${SITE_URL}/#author`,
        "name": "Salil Javeri",
        "jobTitle": "Author",
        "url": SITE_URL,
        "knowsLanguage": ["Marathi", "Hindi", "English"]
      },
      {
        "@type": "Book",
        "@id": `${SITE_URL}/#book`,
        "name": "Samanta Samajik Vicharanchi",
        "author": {
          "@id": `${SITE_URL}/#author`
        },
        "description": "A book focusing on thoughts on social equality, self-discovery stories, and human emotions.",
        "inLanguage": ["mr", "hi", "en"],
        "bookFormat": "https://schema.org/EBook"
      }
    ]
  };

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://translate.google.com" />
        <link rel="dns-prefetch" href="https://translate.google.com" />
        
        {/* Inject Schema Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
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