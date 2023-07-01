import Image from "next/image";
import Link from "next/link";

const ProjectCard = ({ id, title, description, image, category }) => {
  return (
    <div className="flex flex-col-reverse items-center justify-around gap-8 portfolio__container lg:flex-row">
      <Image
        src={image}
        width={600}
        height={600}
        className="w-[400px] h-auto object-cover cursor-pointer duration-200 hover:scale-105 xl:w-[500px]"
        alt="img"
      />
      <div className="flex flex-col text-white items-start gap-5">
        <h3 className="uppercase text-xs">{title}</h3>
        <p className="max-w-xl font-[300] sm:text-xl md:text-2xl xl:text-3xl">
          {description}
        </p>
        <span className="font-[200]">{category}</span>
        <Link
          href={`/work/${id}`}
          className="border px-5 py-1 rounded-full font-thin duration-200 hover:scale-95"
        >
          View Work
        </Link>
      </div>
    </div>
  );
};
export default ProjectCard;
