"use client";

import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="max-w-[1140px] mx-auto flex flex-col gap-4">
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
        <span className="mt-2 text-gray-500 lg:mt-4">
          I Build things for the Web
        </span>
      </motion.h1>
      <motion.p
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="text-base md:max-w-[577px] text-zinc-600"
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
        className="flex items-center justify-center w-64 duration-200 bg-transparent border rounded-md outline-none h-14 border-zinc-600 text-zinc-500 hover:bg-zinc-900 hover:border-zinc-900 hover:text-zinc-500"
      >
        Check out my projects!
      </motion.a>
    </div>
  );
};
export default Hero;
