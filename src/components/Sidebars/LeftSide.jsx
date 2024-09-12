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
      className="fixed bottom-0 hidden w-32 h-full lg:inline-flex lg:-left-8 xl:-left-8 2xl:left-0 z-50"
    >
      <div className="flex flex-col items-center justify-end w-full h-full gap-4">
        <div className="flex flex-col gap-4">
          {socialIcons.map((icon) => {
            return (
              <span
                key={icon.id}
                className="flex items-center justify-center w-10 h-10 text-xl text-gray-400 duration-200 rounded-full cursor-pointer bg-zinc-900 hover:text-white hover:-translate-y-2"
              >
                <Link
                  href={icon.url}
                  target="_blank"
                  className="flex items-center justify-center w-full h-full"
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
