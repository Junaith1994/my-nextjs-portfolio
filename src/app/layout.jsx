import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./Providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "Junaith Bin Elias Khan | MERN Stack Developer",
  description:
    "Passionate MERN Stack Developer with expertise in React, Node.js, MongoDB, and Express.js. Building modern web applications with exceptional user experiences.",
  keywords: [
    "MERN Stack",
    "React Developer",
    "Node.js",
    "MongoDB",
    "Express.js",
    "JavaScript",
    "TypeScript",
    "Next.js",
    "Web Developer",
    "Full Stack Developer",
  ],
  authors: [{ name: "Junaith Bin Elias Khan" }],
  openGraph: {
    title: "Junaith Bin Elias Khan | MERN Stack Developer",
    description:
      "Passionate MERN Stack Developer with expertise in React, Node.js, MongoDB, and Express.js.",
    url: "https://junaith-portfolio.vercel.app",
    siteName: "Junaith's Portfolio",
    images: [
      {
        url: "/assets/junaith.png",
        width: 1200,
        height: 630,
        alt: "Junaith Bin Elias Khan",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Junaith Bin Elias Khan | MERN Stack Developer",
    description:
      "Passionate MERN Stack Developer with expertise in React, Node.js, MongoDB, and Express.js.",
    images: ["/assets/junaith.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} font-sans antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
