import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Michal Sousedík — Frontend Developer",
  description: "Modern CV and portfolio for frontend developer Michal Sousedík.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Michal Sousedík — Frontend Developer",
    description: "Modern CV and portfolio for frontend developer Michal Sousedík.",
    type: "website",
    url: "https://example.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Michal Sousedík — Frontend Developer",
    description: "Modern CV and portfolio for frontend developer Michal Sousedík.",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
