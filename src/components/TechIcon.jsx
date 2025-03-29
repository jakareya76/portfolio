import Image from "next/image";

export const TechIcon = ({ component }) => {
  const Component = component;
  return <Image src={component} alt="icon" className="size-10" />;
};
