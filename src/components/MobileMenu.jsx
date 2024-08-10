"use client";

import { useState } from "react";

const MobileMenu = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <div className="relative z-50 block md:hidden">
      {/* Menu Icon */}
      <div
        className="relative mt-4 cursor-pointer right-3"
        onClick={handleToggleMenu}
      >
        {toggleMenu ? (
          <>
            <div className="w-[24px] h-[2px] my-2 bg-white -top-2 absolute rotate-45 duration-300"></div>
            <div className="w-[24px] h-[2px] my-2 bg-white -rotate-45 duration-300"></div>
          </>
        ) : (
          <>
            <div className="w-[24px] h-[2px] my-2 bg-white duration-300"></div>
            <div className="w-[24px] h-[2px] my-2 bg-white duration-300"></div>
            <div className="w-[24px] h-[2px] my-2 bg-white duration-300"></div>
          </>
        )}
      </div>

      {/* Menu */}
      {toggleMenu && (
        <div className="absolute -right-9 w-screen h-[50vh] flex flex-col justify-around items-center z-[999]  gap-2 py-5 rounded top-12 bg-[#000000f3]">
          <a
            href="#hero"
            className="text-[18px] uppercase font-[300]"
            onClick={handleToggleMenu}
          >
            Home
          </a>
          <a
            href="#projects"
            className="text-[18px] uppercase font-[300]"
            onClick={handleToggleMenu}
          >
            Work
          </a>
          <a
            href="#about"
            className="text-[18px] uppercase font-[300]"
            onClick={handleToggleMenu}
          >
            About
          </a>
          <a
            href="#contact"
            className="text-[18px] uppercase font-[300]"
            onClick={handleToggleMenu}
          >
            Contact
          </a>
        </div>
      )}
    </div>
  );
};
export default MobileMenu;
