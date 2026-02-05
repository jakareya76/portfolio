"use client";

import { twMerge } from "tailwind-merge";
import { Fragment } from "react";
import Image from "next/image";

export const ToolboxItems = ({
  toolboxItem,
  className,
  itemsWrapperClassName,
}) => {
  return (
    <div
      className={twMerge("flex overflow-hidden", className)}
      style={{
        maskImage:
          "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
      }}
    >
      <div
        className={twMerge(
          "flex flex-none py-2 gap-3",
          itemsWrapperClassName
        )}
      >
        {[...new Array(2)].fill(0).map((_, arrayIndex) => (
          <Fragment key={arrayIndex}>
            {toolboxItem.map((item, itemIndex) => (
              <div
                key={`${arrayIndex}-${itemIndex}`}
                className="group flex-shrink-0 inline-flex items-center gap-2 px-3 py-2 bg-zinc-800/60 border border-zinc-700/50 rounded-lg hover:border-violet-500/50 hover:bg-zinc-800 transition-all duration-300"
              >
                <div className="size-5 flex items-center justify-center flex-shrink-0">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={20}
                    height={20}
                    className="w-5 h-5 object-contain"
                  />
                </div>
                <span className="text-xs font-medium text-zinc-400 group-hover:text-white transition-colors duration-300 whitespace-nowrap">
                  {item.title}
                </span>
              </div>
            ))}
          </Fragment>
        ))}
      </div>
    </div>
  );
};
