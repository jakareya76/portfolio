import { Inter, Space_Grotesk } from "next/font/google";
import { twMerge } from "tailwind-merge";

import Footer from "@/components/Footer";
import "./globals.css";

export const metadata = {
  title: "Jakareya | Full Stack Developer",
  description: "Portfolio site of Jakareya Ahmed - Full Stack Developer specializing in Next.js, Node.js, and Cloud technologies",
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={twMerge(
          inter.variable,
          spaceGrotesk.variable,
          `bg-zinc-950 text-white antialiased font-sans`
        )}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
