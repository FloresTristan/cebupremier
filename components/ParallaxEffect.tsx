'use client'
import { ParallaxProvider } from "react-scroll-parallax"

export default function ParallaxEffect({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <ParallaxProvider>{children}</ParallaxProvider>;
}