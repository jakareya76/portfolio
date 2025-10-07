import grainImage from "@/assets/images/grain.jpg";
import { forwardRef } from "react";

export const ContactSection = forwardRef((props, ref) => {
  return (
    <section ref={ref} id="contact" className="py-16 relative ">
      {/* Add a sentinel element for IntersectionObserver */}
      <div className="absolute top-0 h-[50vh] w-full pointer-events-none"></div>

      <div className="container mx-auto">
        <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl overflow-hidden z-0 text-center relative min-h-[300px] md:min-h-[250px] flex items-center">
          <div
            className="absolute inset-0 opacity-10 -z-10"
            style={{
              backgroundImage: `url(${grainImage.src})`,
            }}
          ></div>
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center justify-between md:text-left w-full">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl">
                Open to Frontend Opportunities
              </h2>
              <p className="text-sm mt-2 md:text-base max-w-4xl">
                I'm currently seeking a Frontend Developer role where I can
                contribute my skills in React, Next.js, and modern web
                technologies. If you're hiring or know of an opportunity, feel
                free to reach out—let's build something great together!
              </p>
            </div>
            <div>
              <a
                href="mailto:jakareya1306@gmail.com"
                className="text-white bg-gray-900 w-max inline-flex items-center gap-2 px-6 h-12 rounded-xl cursor-pointer "
              >
                <span className="font-semibold">Contact Me</span>
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
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});
