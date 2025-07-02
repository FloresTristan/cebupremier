import type { Metadata } from "next";
import { Geist, Geist_Mono, DM_Serif_Text } from "next/font/google";
import localFont from "next/font/local";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import "./globals.css";
import ParallaxEffect from "@/components/ParallaxEffect";

const flatLine = localFont({
  src: [
    {
      path: "../public/fonts/FlatlineRegular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path:"../public/fonts/FlatlineRegular-Italic.woff2",
      weight: "400",
      style: "italic"
    },
    {
      path:"../public/fonts/FlatlineSemiBold.woff2",
      weight: "500",
      style: "normal"
    },
    {
      path: "../public/fonts/FlatlineBold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-flatline",
})

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
        className={`${geistSans.variable} ${geistMono.variable} ${dmSerifText.variable} ${flatLine.variable} antialiased`}
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
