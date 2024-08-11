import Image from "next/image";
import Link from "next/link";

const ProjectCard = ({ title, image, link, gitLink }) => {
  return (
    <div className="flex flex-col-reverse items-center w-full justify-between gap-8 portfolio__container xl:flex-row">
      <Image
        src={image}
        width={600}
        height={600}
        className="w-[400px] h-auto xl:h-[450px] object-fill rounded cursor-pointer duration-200 hover:scale-105 xl:w-[700px]"
      />
      <div className="flex flex-col text-white items-start gap-5">
        <h3 className="uppercase text-3xl md:text-4xl">{title}</h3>
        <p className="max-w-xl text-sm md:text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum optio
          autem omnis exercitationem eveniet aspernatur sint labore est quis
          commodi eaque, nostrum blanditiis, quod, sed eum amet iure minus
          eligendi.
        </p>

        <div className="flex items-center justify-center gap-5">
          <Link
            href={link}
            className="border px-5 py-1 font-semibold rounded-full hover:bg-white hover:text-black duration-300"
          >
            View Project
          </Link>
          <Link
            href={gitLink}
            className="border px-5 py-1 rounded-full bg-white text-black font-semibold"
          >
            View Github
          </Link>
        </div>
      </div>
    </div>
  );
};
export default ProjectCard;
