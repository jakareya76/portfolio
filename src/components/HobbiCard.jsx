"use client";

import { motion } from "framer-motion";
import { hobbies } from "@/constants";
import { useRef } from "react";

const HobbiCard = () => {
  const constraintRef = useRef(null);

  return (
    <div className="relative flex-1" ref={constraintRef}>
      {hobbies.map((hobby, idx) => {
        return (
          <motion.div
            key={idx}
            className="absolute inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5"
            style={{
              top: hobby.top,
              left: hobby.left,
            }}
            drag
            dragConstraints={constraintRef}
          >
            <span className="font-medium text-gray-950">{hobby.title}</span>
            <span>{hobby.emoji}</span>
          </motion.div>
        );
      })}
    </div>
  );
};

export default HobbiCard;
