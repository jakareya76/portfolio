import { Work_Sans } from "next/font/google";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import "./globals.css";

export const metadata = {
  title: "Jakareya || Full Stack Developer",
  description:
    "Welcome to the portfolio website of Jakareya, a talented full stack web developer. Explore a collection of innovative projects, showcasing Jakareya's expertise in front-end and back-end development. With a passion for crafting seamless user experiences and employing the latest technologies, Jakareya delivers dynamic and responsive web solutions. Discover a showcase of skills, creativity, and dedication, reflected in a diverse range of successful projects. Get inspired and collaborate with Jakareya to bring your web development ideas to life. Let's build the future of the web together.",
};

const workSans = Work_Sans({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`bg-[#07080e] ${workSans.className}`}>
        <main className="container mx-auto">
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
