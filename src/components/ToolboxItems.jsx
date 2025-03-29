import { TechIcon } from "./TechIcon";

export const ToolboxItems = ({ toolboxItem }) => {
  return (
    <div>
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
  );
};
