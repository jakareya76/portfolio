"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { portfolioProjects } from "@/constants";
import grainImage from "@/assets/images/grain.jpg";
import SectionHeader from "../shared/SectionHeader";
import { forwardRef } from "react";

const clamp = (num, min, max) => Math.min(Math.max(num, min), max);
const valueAtPercentage = ({ from, to, percentage }) =>
  from + (to - from) * percentage;

export const ProjectsSection = forwardRef((props, ref) => {
  const cardsRef = useRef([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => setIsMobile(window.innerWidth <= 768);
    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const handleScroll = () => {
      let currentActiveIndex = 0;

      cardsRef.current.forEach((card, index) => {
        if (!card) return;
        const rect = card.getBoundingClientRect();
        const topThreshold = window.innerHeight / 2;
        if (rect.top <= topThreshold) currentActiveIndex = index;
      });

      cardsRef.current.forEach((card, index) => {
        if (!card || index === cardsRef.current.length - 1) return;
        const nextCard = cardsRef.current[index + 1];
        const cardInner = card.querySelector(".card-inner");

        const rect = nextCard.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        const offsetTop = 40 + index * 40;
        const offsetBottom = window.innerHeight - card.clientHeight;
        const viewHeight = viewportHeight - offsetTop - offsetBottom;
        const percentageY = clamp(
          (viewportHeight - offsetBottom - rect.top) / viewHeight,
          0,
          1
        );

        const scale = valueAtPercentage({
          from: 1,
          to: 0.8 - index * 0.05,
          percentage: percentageY,
        });

        const brightness = valueAtPercentage({
          from: 1,
          to: 0.6,
          percentage: percentageY,
        });

        const blur = valueAtPercentage({
          from: 0,
          to: 6,
          percentage: percentageY,
        });

        cardInner.style.transform = `scale(${scale})`;
        cardInner.style.filter = `brightness(${brightness}) blur(${blur}px)`;
      });
    };

    const resizeObserver = new ResizeObserver(handleScroll);
    cardsRef.current.forEach((card) => card && resizeObserver.observe(card));

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      resizeObserver.disconnect();
    };
  }, [isMobile]);

  return (
    <section ref={ref} id="projects" className="pb-16 lg:py-24 px-2">
      <div className="container mx-auto max-w-5xl">
        <SectionHeader
          eyeBrow="Showcasing Impactful Work"
          title="Highlighted Projects"
          description="Explore how I bring innovative ideas to life, transforming them into
        powerful and engaging digital solutions that drive results and elevate
        user experiences."
        />

        {/* Desktop Card Slider */}
        <div className="hidden md:block py-10">
          <div
            className="grid gap-10 mx-auto w-full h-full"
            style={{
              gridTemplateRows: `repeat(${portfolioProjects.length}, auto)`,
            }}
          >
            {portfolioProjects.map((project, index) => (
              <div
                key={index}
                ref={(el) => (cardsRef.current[index] = el)}
                className="w-full h-full sticky top-32"
              >
                <div className="card-inner transition-transform duration-300 ease-linear transform-origin-top w-full h-full">
                  <ProjectCard project={project} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="flex flex-col-reverse md:hidden gap-5 mt-10">
          {portfolioProjects.map((project, index) => (
            <div key={index} className="w-full h-full">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

// Project Card Component
const ProjectCard = ({ project }) => (
  <div className="bg-gray-800 rounded-3xl z-0 overflow-hidden after:z-10 after:content-[''] after:absolute after:inset-0 after:outline-2 after:-outline-offset-2 after:rounded-3xl after:outline-white/20 px-8 pt-8 after:pointer-events-none md:pt-12 md:px-10 lg:pt-16 lg:px-20">
    <div
      className="absolute inset-0 -z-10 opacity-5"
      style={{ backgroundImage: `url(${grainImage.src})` }}
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
        <a href={project.link} target="_blank" className="z-50 cursor-pointer">
          <button className="bg-white flex items-center justify-center cursor-pointer gap-2 text-gray-950 h-12 w-full md:w-auto px-8 mt-8 rounded-lg font-semibold tracking-wider">
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
);
