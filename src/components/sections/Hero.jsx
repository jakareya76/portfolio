import Image from "next/image";
import memojiImage from "@/assets/images/memoji-computer.png";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import grainImage from "@/assets/images/grain.jpg";
import StarIcon from "@/assets/icons/star.svg";
import HeroOrbit from "../HeroOrbit";

export const HeroSection = () => {
  return (
    <section className="py-32 xl:py-48 relative z-0 overflow-x-clip">
      <div
        className="absolute inset-0"
        style={{
          maskImage:
            "linear-gradient(to bottom, transparent, black 10%, black 70%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent, black 10%, black 70%, transparent)",
        }}
      >
        <div
          className="absolute inset-0 -z-30 opacity-5"
          style={{ backgroundImage: `url(${grainImage.src})` }}
        ></div>

        <div className="absolute inset-0 size-[620px] border-2 rounded-full top-1/2 left-1/2 -translate-1/2 -translate-y-1/2 border-emerald-300/5 shadow-[0_0_80px_inset] shadow-emerald-300/5"></div>
        <div className="absolute inset-0 size-[850px] border-2 rounded-full top-1/2 left-1/2 -translate-1/2 -translate-y-1/2 border-emerald-300/5 shadow-[0_0_80px_inset] shadow-emerald-300/5"></div>
        <div className="absolute inset-0 size-[1100px] border-2 rounded-full top-1/2 left-1/2 -translate-1/2 -translate-y-1/2 border-emerald-300/5 shadow-[0_0_80px_inset] shadow-emerald-300/5"></div>
        <div className="absolute inset-0 size-[1350px] border-2 rounded-full top-1/2 left-1/2 -translate-1/2 -translate-y-1/2 border-emerald-300/5 shadow-[0_0_80px_inset] shadow-emerald-300/5"></div>

        <HeroOrbit size={800} rotation={-72}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className="size-28 text-emerald-400"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 1C12 1 12 8 10 10C8 12 1 12 1 12C1 12 8 12 10 14C12 16 12 23 12 23C12 23 12 16 14 14C16 12 23 12 23 12C23 12 16 12 14 10C12 8 12 1 12 1Z"
              fill="currentColor"
            />
          </svg>
        </HeroOrbit>

        <HeroOrbit size={550} rotation={20}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className="size-12 text-emerald-400"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 1C12 1 12 8 10 10C8 12 1 12 1 12C1 12 8 12 10 14C12 16 12 23 12 23C12 23 12 16 14 14C16 12 23 12 23 12C23 12 16 12 14 10C12 8 12 1 12 1Z"
              fill="currentColor"
            />
          </svg>
        </HeroOrbit>

        <HeroOrbit size={590} rotation={98}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className="size-8 text-emerald-400"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 1C12 1 12 8 10 10C8 12 1 12 1 12C1 12 8 12 10 14C12 16 12 23 12 23C12 23 12 16 14 14C16 12 23 12 23 12C23 12 16 12 14 10C12 8 12 1 12 1Z"
              fill="currentColor"
            />
          </svg>
        </HeroOrbit>

        <HeroOrbit size={430} rotation={-14}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="size-8 text-emerald-400/20"
          >
            <path
              d="M1 12L10.1667 10.1667L12 1L13.8333 10.1667L23 12L13.8333 13.8333L12 23L10.1667 13.8333L1 12Z"
              fill="currentColor"
            />
          </svg>
        </HeroOrbit>

        <HeroOrbit size={440} rotation={79}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="size-5 text-emerald-400/20"
          >
            <path
              d="M1 12L10.1667 10.1667L12 1L13.8333 10.1667L23 12L13.8333 13.8333L12 23L10.1667 13.8333L1 12Z"
              fill="currentColor"
            />
          </svg>
        </HeroOrbit>
        <HeroOrbit size={530} rotation={180}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="size-10 text-emerald-400/20"
          >
            <path
              d="M1 12L10.1667 10.1667L12 1L13.8333 10.1667L23 12L13.8333 13.8333L12 23L10.1667 13.8333L1 12Z"
              fill="currentColor"
            />
          </svg>
        </HeroOrbit>
        <HeroOrbit size={710} rotation={145}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="size-14 text-emerald-400/20"
          >
            <path
              d="M1 12L10.1667 10.1667L12 1L13.8333 10.1667L23 12L13.8333 13.8333L12 23L10.1667 13.8333L1 12Z"
              fill="currentColor"
            />
          </svg>
        </HeroOrbit>
        <HeroOrbit size={710} rotation={145}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="size-14 text-emerald-400/20"
          >
            <path
              d="M1 12L10.1667 10.1667L12 1L13.8333 10.1667L23 12L13.8333 13.8333L12 23L10.1667 13.8333L1 12Z"
              fill="currentColor"
            />
          </svg>
        </HeroOrbit>
        <HeroOrbit size={720} rotation={85}>
          <div className="size-3 bg-emerald-300/20 rounded-full"></div>
        </HeroOrbit>
        <HeroOrbit size={520} rotation={-41}>
          <div className="size-2 bg-emerald-300/20 rounded-full"></div>
        </HeroOrbit>
        <HeroOrbit size={650} rotation={-5}>
          <div className="size-2 bg-emerald-300/20 rounded-full"></div>
        </HeroOrbit>
      </div>
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
            <div className="bg-green-500 size-2.5 rounded-full animate-pulse"></div>
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
          <button className="cursor-pointer inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl">
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
          </button>
          <button className="cursor-pointer inline-flex items-center gap-2 border border-white bg-white text-gray-950 px-6 h-12 rounded-xl">
            <span>🖐</span>
            <span className="font-semibold">Let's Connect</span>
          </button>
        </div>
      </div>
    </section>
  );
};
