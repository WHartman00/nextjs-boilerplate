import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "ThinkFridge",
    template: "%s | ThinkFridge",
  },
  description: "The fridge that learns what you love.",
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <title>ThinkFridge</title> {/* Optional fallback */}
      </head>
      <body className="bg-white text-gray-900">
        ...
        <header className="bg-white shadow-md p-4">
          <nav className="max-w-5xl mx-auto flex justify-between items-center">
            <div className="text-xl font-bold">
              <Link href="/">ThinkFridge</Link>
            </div>
            <div className="space-x-6 text-base font-medium">
              <Link href="/">Home</Link>
              <Link href="/partner">Partner With Us</Link>
            </div>
          </nav>
        </header>
        <main className="max-w-5xl mx-auto p-6">{children}</main>
      </body>
    </html>
  );
}
