"use client";

import Link from "next/link";
import Image from "next/image";

import { motion } from "framer-motion";

import MobileMenu from "./MobileMenu";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-5 py-4 text-white xl:px-0">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-center"
      >
        <Link href="/">
          <Image
            src="/logo.png"
            width={66}
            height={66}
            className="object-cover"
            alt="logo"
          />
        </Link>
      </motion.div>
      <div className="items-center justify-center hidden gap-8 md:flex">
        <Link href="/" className="text-[18px] uppercase font-[300]">
          <motion.div
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.2 }}
          >
            Home
          </motion.div>
        </Link>
        <Link href="/work" className="text-[18px] uppercase font-[300]">
          <motion.div
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            Work
          </motion.div>
        </Link>
        <Link href="/about" className="text-[18px] uppercase font-[300]">
          <motion.div
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            About
          </motion.div>
        </Link>
      </div>

      <MobileMenu />
    </nav>
  );
};
export default Navbar;
