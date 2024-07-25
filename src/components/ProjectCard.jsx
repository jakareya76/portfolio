import Image from "next/image";
import Link from "next/link";

const ProjectCard = ({ title, image, link, gitLink }) => {
  return (
    <div className="relative flex flex-col overflow-hidden rounded-xl group">
      <div className="absolute z-50 group-hover:top-0 top-96 duration-300 rounded-xl left-0 w-full h-full bg-[#000000b0]">
        <div className="flex flex-col items-center justify-center w-full h-full gap-3">
          <h3 className="text-xl text-white uppercase">{title}</h3>
          <div className="flex items-center justify-center gap-3">
            <Link
              href={link}
              target="_blank"
              className="px-5 py-1 text-white duration-200 border rounded-full hover:bg-green-700 hover:border-green-700 hover:scale-95"
            >
              Project Link
            </Link>
            <Link
              href={gitLink}
              target="_blank"
              className="px-5 py-1 text-white duration-200 border rounded-full hover:bg-green-700 hover:border-green-700 hover:scale-95"
            >
              Github Link
            </Link>
          </div>
        </div>
      </div>
      <Image
        src={image}
        width={400}
        height={300}
        className="w-[320px] h-[200px] xl:w-[600px] xl:h-[280px] cursor-pointer rounded-xl"
        alt="img"
      />
    </div>
  );
};
export default ProjectCard;
