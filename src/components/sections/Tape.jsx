"use client";

import Marquee from "react-fast-marquee";

const words = [
  "Performance",
  "Efficiency",
  "Accessibility",
  "Scalability",
  "Reliability",
  "Flexibility",
  "Simplicity",
  "Maintainability",
  "Usability",
  "Portability",
  "Readability",
];

export const TapeSection = () => {
  return (
    <div className="py-16">
      <div className="bg-gradient-to-r from-emerald-300 to-sky-400 overflow-hidden -rotate-3 flex items-center justify-center">
        <Marquee gradient={false} speed={50} pauseOnHover>
          {words.map((word, index) => (
            <div
              key={index}
              className="inline-flex items-center gap-2 px-4 py-3"
            >
              <span className="text-gray-900 uppercase font-extrabold text-sm">
                {word}
              </span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="white"
                xmlns="http://www.w3.org/2000/svg"
                className="size-6 text-gray-900"
              >
                <path
                  d="M12 1C12 1 12 8 10 10C8 12 1 12 1 12C1 12 8 12 10 14C12 16 12 23 12 23C12 23 12 16 14 14C16 12 23 12 23 12C23 12 16 12 14 10C12 8 12 1 12 1Z"
                  fill="currentColor"
                />
              </svg>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};
