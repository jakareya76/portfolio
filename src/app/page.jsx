"use client";

import ProjectCard from "@/components/ProjectCard";
import LeftSide from "@/components/LeftSide";
import RightSide from "@/components/RightSide";
import Hero from "@/components/Hero";

import { motion } from "framer-motion";

import { myWork } from "@/constants";

const HomePage = () => {
  return (
    <>
      {/* LeftSide Icon */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="hidden w-32 h-full xl:inline-flex fixed xl:-left-8 2xl:left-0 bottom-0"
      >
        <LeftSide />
      </motion.div>

      {/* Hero Section */}
      <section className="w-full h-full flex flex-col items-center justify-between gap-20 xl:flex-row">
        <div className="w-full h-full mx-auto p-4">
          <Hero />
        </div>
      </section>

      {/* Work Section */}
      <section id="projects" className="w-full h-full px-8 py-36 ">
        <h2 className="text-white text-3xl text-center md:text-left md:text-5xl ">
          <span className="font-[100]">My Recent </span>
          <span className="font-semibold">Works</span>
        </h2>
        <div className="flex items-center justify-center">
          <div className="py-24 space-y-28 w-full">
            {myWork.map((work) => {
              return <ProjectCard key={work.id} {...work} />;
            })}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="w-full h-full px-8">
        <h2 className="text-white uppercase text-2xl text-center underline underline-offset-8">
          a bit about me
        </h2>

        <div className="flex flex-col items-center justify-around gap-8 py-12 md:py-28 lg:flex-row">
          <div className="flex flex-col">
            <h3 className="text-white max-w-2xl text-center md:text-left md:text-4xl md:leading-[46px] ">
              <span className="font-thin">
                I am a Full Stack Developer <br /> who is passionate about
                creating{" "}
              </span>
              beautiful and interactive{" "}
              <span className="font-thin">web application </span> and Mobile App
              with <span className="font-thin">React Native</span>
            </h3>
            <p className="text-white text-xs font-[300] max-w-xl py-8 text-center md:text-left">
              As a professional web developer, I am skilled in creating
              beautiful, interactive, and user-friendly websites using the
              latest technologies and best practices. With a strong background
              in HTML, CSS, JavaScript, I am able to develop websites that are
              responsive, optimized for search engines, and easy to maintain. I
              am proficient in frameworks such as React and have experience
              working with APIs and other back-end technologies. I am a reliable
              and efficient developer who is always willing to go the extra mile
              to ensure that my clients are satisfied with the work I deliver.
            </p>
          </div>
          <div className="w-full md:w-1/2"></div>
        </div>
      </section>

      {/* RightSide Email */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="hidden w-32 h-full xl:inline-flex fixed right-0 bottom-0"
      >
        <RightSide />
      </motion.div>
    </>
  );
};
export default HomePage;
