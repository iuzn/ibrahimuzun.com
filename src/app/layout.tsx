import type { Metadata } from "next";
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
