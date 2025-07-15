"use client";

const Header = ({ activeSection }) => {
  // Receive activeSection as prop
  return (
    <header className="flex justify-center items-center fixed inset-x-0 top-5 z-50">
      <nav className="flex gap-1 p-0.5 border border-white/15 bg-white/10 backdrop-blur rounded-full">
        {["home", "projects", "about", "contact"].map((section) => (
          <a
            key={section}
            href={`#${section}`}
            className={`px-4 py-1.5 rounded-full text-sm font-semibold duration-200 ${
              activeSection === section
                ? "bg-white text-gray-900"
                : "text-white/70 hover:bg-white/10 hover:text-white"
            }`}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Header;
