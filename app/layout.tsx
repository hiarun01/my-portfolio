import type {Metadata} from "next";
import {Inter, Poppins, JetBrains_Mono} from "next/font/google";
import "./globals.css";
import {Analytics} from "@vercel/analytics/next";
import {SpeedInsights} from "@vercel/speed-insights/next";
import InitialBlur from "../components/InitialBlur";

// Main font for body text
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

// Alternative font for headings
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

// Monospace font for code
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Arun's Portfolio",
  description:
    "Hi, I'm Arun Kumar, a web developer who enjoys turning ideas into interactive websites.",
  icons: {
    icon: "/pfp.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <InitialBlur />
        <SpeedInsights />
        <Analytics />
        {children}
      </body>
    </html>
  );
}
