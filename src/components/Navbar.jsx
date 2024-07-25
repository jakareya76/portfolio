"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import MobileMenu from "./MobileMenu";

const Navbar = () => {
  return (
    <header className="sticky top-0 bg-[#07080e] z-50">
      <nav className="flex items-center justify-between px-5 py-2 mt-2 text-white xl:px-0">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center"
        >
          <a href="#hero">
            <Image
              src="/logo.png"
              width={66}
              height={66}
              className="object-cover"
              alt="logo"
            />
          </a>
        </motion.div>
        <div className="items-center justify-center hidden gap-8 md:flex">
          <motion.a
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.2 }}
            href="#hero"
          >
            Home
          </motion.a>
          <motion.a
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4 }}
            href="#projects"
          >
            Projects
          </motion.a>
          <motion.a
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            href="#about"
          >
            About
          </motion.a>
          <motion.a
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            href="#contact"
          >
            Contact
          </motion.a>
        </div>

        <MobileMenu />
      </nav>
    </header>
  );
};
export default Navbar;
