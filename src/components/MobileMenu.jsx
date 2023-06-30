"use client";

import { useState } from "react";
import Link from "next/link";

const MobileMenu = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <div className="block relative md:hidden z-50">
      {/* Menu Icon */}
      <div
        className="relative mt-4 right-3 cursor-pointer"
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
        <div className="flex flex-col absolute top-12 right-0 bg-zinc-900 px-5 py-5 gap-2 rounded">
          <Link
            href="/"
            className="text-[18px] uppercase font-[300]"
            onClick={handleToggleMenu}
          >
            Home
          </Link>
          <Link
            href="/work"
            className="text-[18px] uppercase font-[300]"
            onClick={handleToggleMenu}
          >
            Work
          </Link>
          <Link
            href="/about"
            className="text-[18px] uppercase font-[300]"
            onClick={handleToggleMenu}
          >
            About
          </Link>
        </div>
      )}
    </div>
  );
};
export default MobileMenu;
