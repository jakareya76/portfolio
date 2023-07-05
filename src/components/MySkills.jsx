import { useEffect } from "react";
import TagCanvas from "@/lib/TagCanvas";
import { skills } from "@/constants";

const MySkills = () => {
  useEffect(() => {
    TagCanvas.Start("myCanva", "tagList", {
      initial: [0.4, -0.3],
      noSelect: true,
      textColour: "#fff",
    });
  }, []);
  return (
    <div className="xl:w-[500px] xl:h-[500px] flex items-center justify-center">
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
                  <a href="https://google.com" className="text-sm">
                    {curElem}
                  </a>
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
