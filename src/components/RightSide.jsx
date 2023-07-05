"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const RightSide = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5 }}
      className="hidden w-32 h-full xl:inline-flex fixed right-0 bottom-0"
    >
      <div className=" h-full flex flex-col items-center justify-end gap-28">
        <Link href="mailto:jakareya1306@gmail.com">
          <p className="text-sm tracking-widest rotate-90  text-gray-400">
            Jakareya1306@gmail.com
          </p>
        </Link>
        <span className="w-[2px] h-32 bg-gray-600"></span>
      </div>
    </motion.div>
  );
};
export default RightSide;
