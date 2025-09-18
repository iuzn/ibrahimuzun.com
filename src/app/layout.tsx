import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Instrument_Serif, Imbue } from "next/font/google";
import "@/styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
});

const imbue = Imbue({
  variable: "--font-imbue",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Ibrahim Uzun - Developer & Designer",
  description:
    "Personal portfolio of Ibrahim Uzun, a developer and designer based in Istanbul.",
  metadataBase: new URL("https://ibrahimuzun.com"),
  keywords: [
    "Ibrahim Uzun",
    "Developer",
    "Designer", 
    "Portfolio",
    "React",
    "Next.js",
    "TypeScript",
    "Frontend",
    "UI/UX"
  ],
  authors: [{ name: "Ibrahim Uzun" }],
  creator: "Ibrahim Uzun",
  publisher: "Ibrahim Uzun",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ibrahimuzun.com",
    title: "Ibrahim Uzun - Developer & Designer",
    description:
      "Personal portfolio of Ibrahim Uzun, a developer and designer based in Istanbul.",
    siteName: "Ibrahim Uzun Portfolio",
    images: [
      {
        url: "/profile-image.png",
        width: 1200,
        height: 630,
        alt: "Ibrahim Uzun - Developer & Designer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ibrahim Uzun - Developer & Designer",
    description:
      "Personal portfolio of Ibrahim Uzun, a developer and designer based in Istanbul.",
    images: ["/profile-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/favicon.ico",
      },
    ],
  },
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#115e59" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} ${imbue.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
