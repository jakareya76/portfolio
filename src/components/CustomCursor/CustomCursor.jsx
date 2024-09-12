"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const cursorVariants = {
    default: {
      x: mousePosition.x - 8,
      y: mousePosition.y - 8,
    },
    circle: {
      x: mousePosition.x - 25,
      y: mousePosition.y - 25,
    },
  };

  return (
    <>
      <motion.div
        className="cursor-dot"
        variants={cursorVariants}
        animate="default"
      />
      <motion.div
        className="cursor-circle"
        variants={cursorVariants}
        animate="circle"
      />
    </>
  );
};

export default CustomCursor;
