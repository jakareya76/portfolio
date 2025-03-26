import HeroOrbit from "./HeroOrbit";
import grainImage from "@/assets/images/grain.jpg";

const HeroEffect = () => {
  return (
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
  );
};

export default HeroEffect;
