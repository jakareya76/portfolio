import { twMerge } from "tailwind-merge";
import { TechIcon } from "./TechIcon";
import { Fragment } from "react";
import Image from "next/image";

export const ToolboxItems = ({
  toolboxItem,
  className,
  itemsWrapperClassName,
}) => {
  return (
    <div
      className={twMerge("flex", className)}
      style={{
        maskImage:
          "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 10%, black 70%, transparent)",
      }}
    >
      <div
        className={twMerge(
          "flex flex-none py-0.5 gap-6 pr-6",
          itemsWrapperClassName
        )}
      >
        {[...new Array(2)].fill(0).map((_, index) => (
          <Fragment key={index}>
            {toolboxItem.map((item, index) => (
              <div
                key={index}
                className="inline-flex items-center gap-4 p-1 outline-2 outline-white/10 rounded-lg"
              >
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={100}
                  height={20}
                  className="w-[120px] h-[40px] object-fill rounded"
                />
              </div>
            ))}
          </Fragment>
        ))}
      </div>
    </div>
  );
};
