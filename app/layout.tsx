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
  title: "PopX",
  description: "Assignment of EduCase",
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
        <div className="flex p-9 justify-center">
          <div className="max-w-sm w-full  mx-auto h-[90vh] max-h-[800px] bg-neutral-50 shadow-2xl rounded-xl">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
