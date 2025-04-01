import Image from "next/image";
import memojiImage from "@/assets/images/memoji-computer.png";
import HeroEffect from "../HeroEffect";

export const HeroSection = () => {
  return (
    <section id="home" className="py-32 xl:py-48 relative z-0 overflow-x-clip">
      <HeroEffect />
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-2">
          <Image
            src={memojiImage}
            width={100}
            height={100}
            alt="emoji person"
            className="w-[100px] h-[100px]"
          />
          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 flex items-center gap-3 rounded-lg">
            <div className="bg-green-500 size-2.5 rounded-full relative">
              <div className="bg-green-500 absolute inset-0 animate-ping rounded-full"></div>
            </div>
            <div className="text-sm font-medium">
              Open to Work – Looking for a Frontend Developer Role
            </div>
            {/* <div>Available for new projects</div> */}
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          <h1 className="font-serif text-3xl lg:text-5xl text-center mt-8 max-w-[25ch] mx-auto tracking-wide">
            Passionate Frontend Developer Ready to Join Your Team
          </h1>
          <p className="text-center mt-4 text-gray-400 mx-auto lg:text-lg">
            I specialize in building high-performance, scalable web applications
            using React.js, Next.js, and modern frontend technologies. Let's
            connect and discuss how I can contribute to your company!
          </p>
        </div>
        <div className="flex flex-col items-center gap-4 mt-8 md:flex-row md:justify-center md:gap-8">
          <a
            href="#projects"
            className="cursor-pointer inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl z-50"
          >
            <span className="font-semibold">Explore My Work</span>
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
                d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
              />
            </svg>
          </a>
          <a
            href="#contact"
            className="cursor-pointer z-50 inline-flex items-center gap-2 border border-white bg-white text-gray-950 px-6 h-12 rounded-xl"
          >
            <span>🖐</span>
            <span className="font-semibold">Let's Connect</span>
          </a>
        </div>
      </div>
    </section>
  );
};
