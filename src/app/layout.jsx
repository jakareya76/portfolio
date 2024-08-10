import { Inter } from "next/font/google";

import Navbar from "@/components/Navbar";
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
          <Navbar />
          {children}
          <AnimatedCursor
            color="blue"
            innerSize={8}
            outerSize={35}
            innerScale={1}
            outerScale={2.7}
            outerAlpha={0}
            outerStyle={{
              mixBlendMode: "exclusion",
            }}
          />
        </main>
      </body>
    </html>
  );
}
