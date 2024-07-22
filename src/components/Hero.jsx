"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="max-w-[1140px] mx-auto items-center flex flex-col gap-4  justify-center">
      <motion.img
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        src="/profile.png"
        alt="jakareya"
        className="w-[120px] h-[120px] object-cover rounded-full"
      />
      <motion.h3
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="text-lg tracking-widest text-gray-400"
      >
        Hi, I'm Jakareya
      </motion.h3>
      <motion.p
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-[25px] text-center leading-7 text-blue-50 font-[600] md:text-5xl sm:text-4xl lg:text-6xl 2xl:text-[76px]"
      >
        Experienced Web Developer Specializing in{" "}
        <span className="inline-block text-transparent md:mt-2 bg-gradient-to-r from-orange-600 via-orange-400 to-orange-200 bg-clip-text">
          React JS
        </span>
      </motion.p>
      <motion.p
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="md:text-base sm:text-sm text-xs text-center md:max-w-[550px] text-zinc-600"
      >
        I have a strong foundation in HTML, CSS, and JavaScript, and I am
        skilled in creating interactive and visually appealing website
      </motion.p>
      <div className="flex flex-wrap items-center justify-center gap-5">
        <div className="flex flex-row items-center justify-center gap-5 hero_button_container">
          <motion.a
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            href="#contact"
            className="flex items-center justify-center px-8 py-3 text-sm font-semibold text-white duration-200 bg-blue-500 rounded md:text-lg "
          >
            Contact Me
          </motion.a>
          <motion.a
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            href="/cv.pdf"
            download
            className="flex items-center justify-center px-8 py-3 text-sm font-semibold duration-200 bg-white rounded md:text-lg text-zinc-900 "
          >
            Download CV
          </motion.a>
        </div>
        <div className="flex items-center justify-center gap-5">
          <motion.a
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            href="https://www.linkedin.com/in/jakareya-ahmed"
            target="_black"
            className="flex items-center justify-center px-4  py-[14px] text-lg font-semibold duration-200 bg-white rounded text-zinc-900 "
          >
            <FaLinkedin size={22} />
          </motion.a>
          <motion.a
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            href="https://github.com/jakareya76"
            target="_black"
            className="flex items-center justify-center px-4  py-[14px] text-lg font-semibold duration-200 bg-white rounded text-zinc-900 "
          >
            <FaGithub size={22} />
          </motion.a>
        </div>
      </div>
    </div>
  );
};
export default Hero;
