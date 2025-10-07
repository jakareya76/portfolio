const Footer = () => {
  return (
    <footer className="relative overflow-x-clip">
      <div
        className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 -z-10"
        style={{
          maskImage:
            "radial-gradient(50% 50% at bottom center, black, transparent)",
          WebkitMaskImage:
            "radial-gradient(50% 50% at bottom center, black, transparent)",
        }}
      ></div>
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 border-t border-white/30 py-6 text-sm">
          <div className="text-white/40">&copy; 2025. All rights reserved.</div>
          <nav className="flex flex-col items-center gap-8 md:flex-row">
            <a
              href="/jakareya-frontend-cv.pdf"
              download
              className="inline-flex items-center gap-1.5 text-white font-semibold hover:text-emerald-300 transition"
            >
              <span>Download CV</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </a>

            <a
              href="https://github.com/jakareya76"
              target="_blank"
              className="inline-flex items-center gap-1.5"
            >
              <span className="font-semibold">Github</span>
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
            <a
              href="https://www.linkedin.com/in/jakareya-ahmed"
              target="_blank"
              className="inline-flex items-center gap-1.5"
            >
              <span className="font-semibold">Linkedin</span>
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
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
