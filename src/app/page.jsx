import ParticlesBackground from "@/components/ParticlesBackground";
import ProjectCard from "@/components/ProjectCard";

import { myWork } from "@/constants";

const HomePage = () => {
  return (
    <>
      <ParticlesBackground />

      {/* Hero Section */}
      <section className="w-full h-full py-36 px-5 lg:py-44 relative">
        <div className="flex items-center justify-center">
          <h1 className="hero_heading text-focus-in">
            <span className="font-[100]">I’m a developer specialize in </span>
            <span className="font-semibold">JavaScript </span>
            <span className="font-[100]">and I develop for The </span>
            <span className="font-semibold tracking-in-expand">
              Web & Mobile
            </span>
          </h1>
        </div>
      </section>

      {/* Work Section */}
      <section className="w-full h-full px-8 py-36 ">
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
    </>
  );
};
export default HomePage;
