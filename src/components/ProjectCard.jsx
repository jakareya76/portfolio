import Image from "next/image";
import Link from "next/link";

const ProjectCard = ({ title, image, link }) => {
  return (
    <div className="relative flex flex-col overflow-hidden rounded-xl group">
      <div className="absolute z-50 group-hover:top-0 top-96 duration-300 rounded-xl left-0 w-full h-full bg-[#000000b0]">
        <div className="flex flex-col items-center justify-center w-full h-full gap-3">
          <h3 className="text-xl text-white uppercase">{title}</h3>
          <Link
            href={link}
            target="_blank"
            className="px-5 py-1 text-white duration-200 border rounded-full hover:bg-green-700 hover:border-green-700 hover:scale-95"
          >
            Project Link
          </Link>
        </div>
      </div>
      <Image
        src={image}
        width={600}
        height={600}
        className="w-[320px] h-[200px] xl:w-[500px] xl:h-[300px] object-cover cursor-pointer rounded-xl"
        alt="img"
      />
    </div>
  );
};
export default ProjectCard;
