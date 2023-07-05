"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { socialIcons } from "@/constants";

const LeftSide = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5 }}
      className="hidden w-32 h-full xl:inline-flex fixed xl:-left-8 2xl:left-0 bottom-0"
    >
      <div className="w-full h-full flex flex-col items-center justify-end gap-4">
        <div className="flex flex-col gap-4">
          {socialIcons.map((icon) => {
            return (
              <span
                key={icon.id}
                className="w-10 h-10 bg-zinc-900 flex items-center justify-center text-gray-400 text-xl rounded-full cursor-pointer duration-200 hover:text-white hover:-translate-y-2"
              >
                <Link
                  href={icon.url}
                  target="_blank"
                  className="w-full h-full flex items-center justify-center"
                >
                  {icon.icon}
                </Link>
              </span>
            );
          })}
        </div>
        <span className="w-[2px] h-32 bg-gray-600"></span>
      </div>
    </motion.div>
  );
};
export default LeftSide;
