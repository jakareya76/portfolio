"use client";

import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="max-w-[1140px] mx-auto py-10 flex flex-col gap-4 md:py-24 md:px-8 lg:gap-6 xl:px-4">
      <motion.h3
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="text-lg tracking-widest text-gray-400"
      >
        Hi, my name is
      </motion.h3>
      <motion.h1
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-[34px] leading-10 text-blue-50 font-semibold flex flex-col lg:text-6xl 2xl:text-[76px]"
      >
        Jakareya Ahmed
        <span className="text-gray-500 mt-2 lg:mt-4">
          I Build things for the Web
        </span>
      </motion.h1>
      <motion.p
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="text-base md:max-w-[600px] text-zinc-600"
      >
        I am a web developer with 4+ years of experience in React. I have a
        strong foundation in front-end & back-end development and am skilled in
        creating user-friendly and responsive web applications using React and
        its ecosystem.
      </motion.p>
      <motion.a
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.9 }}
        href="#projects"
        className="w-64 h-14 flex items-center justify-center bg-transparent border border-zinc-600 text-zinc-500 rounded-md outline-none hover:bg-zinc-900 hover:border-zinc-900 hover:text-zinc-400"
      >
        Check out my projects!
      </motion.a>
    </div>
  );
};
export default Hero;
