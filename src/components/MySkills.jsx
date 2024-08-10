"use client";

import { useEffect } from "react";
import TagCanvas from "@/lib/TagCanvas";
import { skills } from "@/constants";

const MySkills = () => {
  useEffect(() => {
    TagCanvas.Start("myCanva", "tagList", {
      initial: [0.3, -0.2],
      noSelect: true,
      textColour: "#fff",
      maxSpeed: 0.03,
      dragControl: true,
    });
  }, []);

  return (
    <div className="flex items-center justify-center xl:w-[500px] xl:h-[500px] z-20">
      <div id="canvaContainer">
        <canvas
          id="myCanva"
          width="500px"
          height="500px"
          className="w-[280px] h-[280px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] xl:w-[550px] xl:h-[550px]"
        >
          <ul id="tagList">
            {skills.map((curElem, idx) => {
              return (
                <li key={idx}>
                  <a href="#">{curElem}</a>
                </li>
              );
            })}
          </ul>
        </canvas>
      </div>
    </div>
  );
};
export default MySkills;
