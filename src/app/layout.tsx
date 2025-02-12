import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { HeroUIProvider } from "@heroui/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  "title": "Gen-Z Translator | Instantly Decode & Speak Like a Zoomer",
  "description": "Convert any text into Gen-Z slang with our AI-powered translator. Perfect for social media, memes, and understanding the latest lingo. Try it now!",
  "keywords": [
    "Gen-Z Translator",
    "Gen-Z Slang",
    "Slang Translator",
    "Zoomer Speak",
    "Internet Lingo",
    "Social Media Language",
    "Trendy Slang",
    "Meme Translator",
    "AI Language Converter",
    "Next-Gen Text Translator"
  ],
  "robots": "index, follow",
  "openGraph": {
    "title": "Gen-Z Translator | Instantly Decode & Speak Like a Zoomer",
    "description": "Convert any text into Gen-Z slang effortlessly. Perfect for social media, memes, and staying trendy.",
    "url": "https://gen-z.chat",
    "type": "website",
    "images": [
      {
        "url": "https://gen-z.chat/og-image.jpg",
        "width": 1200,
        "height": 630,
        "alt": "Gen-Z Translator - AI-powered slang converter"
      }
    ]
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Gen-Z Translator | Decode & Speak Like a Zoomer",
    "description": "Translate any text into Gen-Z slang instantly. Stay trendy & meme-ready!",
    // "image": "https://yourwebsite.com/twitter-image.jpg",
    "creator": "@yourhandle"
  },
  // "canonical": "https://gen-z.chat",
  "themeColor": "#FF5733"
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <HeroUIProvider>
          <main className="dark text-foreground bg-background">
            {children}
          </main>
        </HeroUIProvider>
      </body>
    </html>
  );
}
