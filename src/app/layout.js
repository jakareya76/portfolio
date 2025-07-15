import { Inter, Calistoga } from "next/font/google";
import { twMerge } from "tailwind-merge";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";
import UnderDevelopment from "@/components/UnderDevelopment";

export const metadata = {
  title: "Jakareya | Portfolio",
  description: "Portfolio site of Jakareya Ahmed Sane, a software developer",
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const calistoga = Calistoga({
  subsets: ["latin"],
  weight: "400", // Corrected from 'weights' to 'weight'
  variable: "--font-serif",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={twMerge(
          inter.variable,
          calistoga.variable,
          `bg-gray-900 text-white antialiased font-sans`
        )}
      >
        {/* <UnderDevelopment /> */}

        {children}
        <Footer />
      </body>
    </html>
  );
}
