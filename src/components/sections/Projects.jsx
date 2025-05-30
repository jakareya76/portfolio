import Image from "next/image";

import { portfolioProjects } from "@/constants";
import grainImage from "@/assets/images/grain.jpg";
import SectionHeader from "../shared/SectionHeader";

export const ProjectsSection = () => {
  return (
    <section id="projects" className="pb-16 lg:py-24 px-2">
      <div className="container mx-auto max-w-5xl">
        <SectionHeader
          eyeBrow="Showcasing Impactful Work"
          title="Highlighted Projects"
          description="Explore how I bring innovative ideas to life, transforming them into
        powerful and engaging digital solutions that drive results and elevate
        user experiences."
        />

        <div className="flex flex-col gap-20 mt-10 md:mt-20">
          {portfolioProjects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 sticky rounded-3xl z-0 overflow-hidden after:z-10 after:content-[''] after:absolute after:inset-0 after:outline-2 after:-outline-offset-2 after:rounded-3xl after:outline-white/20 px-8 pt-8 after:pointer-events-none md:pt-12 md:px-10 lg:pt-16 lg:px-20"
              style={{
                top: `calc(64px + ${index * 40}px)`,
              }}
            >
              <div
                className="absolute inset-0 -z-10 opacity-5"
                style={{
                  backgroundImage: `url(${grainImage.src})`,
                }}
              ></div>
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent inline-flex gap-2 font-bold uppercase tracking-widest text-sm bg-clip-text text-center">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>

                  <h3 className="font-serif text-2xl md:text-3xl md:mt-5 mt-2 tracking-wide">
                    {project.title}
                  </h3>
                  <hr className="border-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result, index) => (
                      <li
                        key={index}
                        className="flex items-center gap-2 text-sm md:text-base text-white/50"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="size-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                          />
                        </svg>

                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={project.link}
                    target="_blank"
                    className="z-50 cursor-pointer"
                  >
                    <button className="bg-white flex items-center justify-center cursor-pointer gap-2 text-gray-950 h-12 w-full md:w-auto px-8 mt-8 rounded-lg font-semibold tracking-wider ">
                      <span>View Live Site</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-arrow-up-right size-4"
                      >
                        <line x1="7" y1="17" x2="17" y2="7"></line>
                        <polyline points="7 7 17 7 17 17"></polyline>
                      </svg>
                    </button>
                  </a>
                </div>
                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 -mb-4 md:mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
