import type { Metadata } from "next";
import { Geist, Geist_Mono, DM_Serif_Text } from "next/font/google";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import "./globals.css";
import ParallaxEffect from "@/components/ParallaxEffect";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const dmSerifText = DM_Serif_Text({
  variable: "--font-dm-serif-text",
  subsets: ["latin"],
  weight: "400",
})

export const metadata: Metadata = {
  title: "Cebu Premiere Real Estate",
  description: "official website of Cebu Premier Real Estate",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${dmSerifText.variable} antialiased`}
      >
        <NavBar />
        <ParallaxEffect>
          {children}
        </ParallaxEffect>
        <Footer />
      </body>
    </html>
  );
}
