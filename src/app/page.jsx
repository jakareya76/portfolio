import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import LeftSide from "@/components/LeftSide";
import RightSide from "@/components/RightSide";
import MySkills from "@/components/MySkills";
import Hero from "@/components/Hero";

import { myWork } from "@/constants";

const HomePage = () => {
  return (
    <>
      <LeftSide />

      {/* Hero Section */}
      <section id="hero" className="py-16 f md:py-24 2xl:py-32 md:px-8 xl:px-4">
        <div className="p-4">
          <Hero />
        </div>
      </section>

      {/* Work Section */}
      <section id="projects" className="w-full h-full px-4 py-40 md:px-8">
        <h2 className="text-3xl text-center text-white md:text-left md:text-5xl ">
          <span className="font-[100]">My Recent </span>
          <span className="font-semibold">Works</span>
        </h2>
        <div className="flex items-center justify-center">
          <div className="w-full py-24 space-y-28">
            {myWork.map((work) => {
              return <ProjectCard key={work.id} {...work} />;
            })}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="w-full h-full p-4 md:px-12">
        <h2 className="text-2xl text-center text-white underline uppercase underline-offset-8">
          a bit about me
        </h2>

        <div className="flex flex-col items-center justify-around gap-8 py-12 md:py-28 lg:flex-row">
          <div className="flex flex-col">
            <h3 className="text-white text-xl max-w-2xl text-left md:text-left md:text-4xl md:leading-[46px] ">
              <span className="font-thin">
                I am a Full Stack Developer <br /> who is passionate about
                creating{" "}
              </span>
              beautiful and interactive{" "}
              <span className="font-thin">web application </span> and Mobile App
            </h3>
            <p className="text-white text-sm font-[300] max-w-xl py-8 text-justify md:text-left">
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
          <div className="flex items-center justify-center w-full md:w-1/2">
            <MySkills />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-8 py-28">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl font-thin text-white md:text-6xl">
            Get <span className="font-bold">in Touch.</span>
          </h1>
          <span className="py-3 text-xl font-thin text-white md:py-5">
            So that we can talk more about...
          </span>
          <Link
            href="mailto:jakareya1306@gmail.com"
            className="px-8 py-4 text-2xl text-gray-400 duration-200 bg-transparent border border-gray-600 rounded hover:bg-zinc-900 hover:border-zinc-900"
          >
            Say Hello
          </Link>
        </div>
      </section>
      <RightSide />
    </>
  );
};
export default HomePage;
