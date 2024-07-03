"use client";

import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="max-w-[1140px] mx-auto items-center flex flex-col gap-4  justify-center">
      <motion.img
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        src="/jakareya.png"
        alt="jakareya"
        className="max-w-[100px] h-[100px] rounded-full"
      />
      <motion.h3
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="text-lg tracking-widest text-gray-400"
      >
        Hi, I'm Jakareya
      </motion.h3>
      <motion.h2
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-[34px] font-inter text-center leading-loose text-blue-50 font-bold flex flex-col lg:text-6xl 2xl:text-[76px]"
      >
        Experienced Web Developer Specializing in React Js
      </motion.h2>
      <motion.p
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="text-base text-center md:max-w-[550px] text-zinc-600"
      >
        I have a strong foundation in HTML, CSS, and JavaScript, and I am
        skilled in creating interactive and visually appealing website
      </motion.p>
      <div className="flex items-center justify-center gap-5">
        <motion.button
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="flex items-center justify-center px-8 py-3 text-lg font-semibold text-white duration-200 bg-blue-500 rounded font-inter "
        >
          Contact Me
        </motion.button>
        <motion.button
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="flex items-center justify-center px-8 py-3 text-lg font-semibold text-white duration-200 bg-blue-500 rounded font-inter "
        >
          Download CV
        </motion.button>
      </div>
    </div>
  );
};
export default Hero;
