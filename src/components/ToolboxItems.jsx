import { twMerge } from "tailwind-merge";
import { TechIcon } from "./TechIcon";

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
        {toolboxItem.map((item, index) => (
          <div
            key={index}
            className="inline-flex items-center gap-4 py-2 px-3 outline-2 outline-white/10 rounded-lg"
          >
            <TechIcon component={item.icon} />
            <span className="font-semibold">{item.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
