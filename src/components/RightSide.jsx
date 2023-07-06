"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const RightSide = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5 }}
      className="fixed bottom-0 right-0 hidden w-32 h-full xl:inline-flex"
    >
      <div className="flex flex-col items-center justify-end h-full  gap-28">
        <Link href="mailto:jakareya1306@gmail.com">
          <p className="text-sm tracking-widest text-gray-400 rotate-90">
            Jakareya1306@gmail.com
          </p>
        </Link>
        <span className="w-[2px] h-32 bg-gray-600"></span>
      </div>
    </motion.div>
  );
};
export default RightSide;
