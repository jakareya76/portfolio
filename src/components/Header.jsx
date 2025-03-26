const Header = () => {
  return (
    <header className="flex justify-center items-center fixed inset-x-0 top-5 z-50">
      <nav className="flex gap-1 p-0.5 border border-white/15 bg-white/10 backdrop-blur rounded-full">
        <a
          href="#home"
          className="px-4 py-1.5 rounded-full text-white/70 text-sm font-semibold duration-200 hover:bg-white/10 hover:text-white"
        >
          Home
        </a>
        <a
          href="#projects"
          className="px-4 py-1.5 rounded-full text-white/70 text-sm font-semibold duration-200 hover:bg-white/10 hover:text-white"
        >
          Projects
        </a>
        <a
          href="#about"
          className="px-4 py-1.5 rounded-full text-white/70 text-sm font-semibold duration-200 hover:bg-white/10 hover:text-white"
        >
          About
        </a>
        <a
          href="#contact"
          className="px-4 py-1.5 rounded-full text-sm font-semibold bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900"
        >
          Contact
        </a>
      </nav>
    </header>
  );
};

export default Header;
