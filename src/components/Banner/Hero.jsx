"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Spotlight } from "../ui/Spotlight";
import { HeroHighlight } from "../ui/hero-highlight";
import Navbar from "../Navbar/Navbar";

const Hero = () => {
  return (
    <HeroHighlight>
      <Navbar />
      <div className="absolute pointer-events-none h-screen inset-0 z-30 flex items-center justify-center bg-[#07080e] [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)] w-full"></div>
      <div className="max-w-[1140px] mx-auto items-center flex flex-col gap-4 justify-center h-full w-full">
        <div>
          <Spotlight
            className="-top-40 z-50 -left-10 md:-left-16 md:-top-40 h-screen"
            fill="gray"
          />
        </div>

        <motion.img
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          src="/profile.png"
          alt="jakareya"
          className="w-[120px] h-[120px] object-cover rounded-full mt-20 z-40"
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
          className="[mask-image:radial-gradient(ellipse_at_right,transparent_1%,black)] z-40 text-[25px] font-bold text-center leading-7 pb-3 text-blue-50 md:text-5xl sm:text-4xl lg:text-6xl 2xl:text-[76px]"
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
          className="md:text-base sm:text-sm text-xs text-center md:max-w-[550px] z-50 text-zinc-400"
        >
          I have a strong foundation in HTML, CSS, and JavaScript, and I am
          skilled in creating interactive and visually appealing websites.
        </motion.p>
        <div className="flex flex-wrap items-center justify-center gap-5">
          <div className="flex z-50 flex-row items-center justify-center gap-5 hero_button_container">
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
              className="flex  items-center justify-center px-8 py-3 text-sm font-semibold duration-200 bg-white rounded md:text-lg text-zinc-900 "
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
              target="_blank"
              className="flex items-center z-50 justify-center px-4  py-[14px] text-lg font-semibold duration-200 bg-white rounded text-zinc-900 "
            >
              <FaLinkedin size={22} />
            </motion.a>
            <motion.a
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              href="https://github.com/jakareya76"
              target="_blank"
              className="flex items-center z-50 justify-center px-4  py-[14px] text-lg font-semibold duration-200 bg-white rounded text-zinc-900 "
            >
              <FaGithub size={22} />
            </motion.a>
          </div>
        </div>
      </div>
    </HeroHighlight>
  );
};
export default Hero;
