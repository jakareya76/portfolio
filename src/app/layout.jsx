import { Inter } from "next/font/google";
import AnimatedCursor from "react-animated-cursor";

import "./globals.css";

export const metadata = {
  title: "Jakareya Portfolio || Front-End Web Developer",
  description:
    "Welcome to the portfolio website of Jakareya, a talented web developer.",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`bg-[#07080e] ${inter.className}`}>
        <main className="container mx-auto">
          {children}
          <AnimatedCursor />
        </main>
      </body>
    </html>
  );
}
