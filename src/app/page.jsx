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
                I am a skilled{" "}
                <span className="font-normal">web developer</span> <br /> who is
                passionate about creating{" "}
              </span>
              <span>beautiful and interactive </span>
              <span className="font-thin">Websites </span>
              <span className="font-thin">using cutting-edge </span>technologies
            </h3>
            <p className="text-white text-sm font-[300] max-w-xl py-8 text-justify md:text-left">
              Hi, I'm Jakareya, A Web Developer working on the Front End with
              React JS or nextJS to make those nice looking and easy to use
              websites! Frontend stuff is my thing but I also know some backend
              as well such as Node JS, Express JS and MongoDB. This helps me to
              ensure I make sure my websites are not only pretty but also
              perform. But I focused on React JS and it's ecosystem. I Used Next
              JS based on my React expertise to develop responsive and
              user-friendly user interfaces.
              <br />
              <br />
              I'm always keen to learn new things and use the latest tools to
              make better websites. I'm excited to join teams that are
              passionate about crafting great web experiences. Let’s connect and
              discuss how I can contribute to your projects!
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
