import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Autoplay } from "swiper/modules";
import Image from "next/image";
import { motion } from "framer-motion";
import { myWork } from "@/constants";
import Link from "next/link";

const Projects = () => {
  return (
    <div id="projects" className="px-10 my-32">
      <h1 className="text-2xl lg:text-4xl font-medium text-white text-center md:text-start mt-48 mb-10">
        <span className="font-thin">My Recent</span> Projects
      </h1>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={1}
        loop={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
          slideShadows: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[EffectCoverflow, Autoplay]}
        className="mySwiper"
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {myWork.map((project) => (
          <SwiperSlide
            key={project.id}
            className="swiper-slide flex justify-center items-center"
          >
            <div className="relative w-full h-[400px] md:h-[600px] overflow-hidden rounded-xl">
              <motion.div
                className="relative w-full h-full image-wrapper"
                initial={{ y: 0 }}
                whileHover={{ y: -20 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <Link href={project.link} target="_blank">
                  <Image
                    src={project.image}
                    alt={project.name}
                    width={600}
                    height={400}
                    layout="responsive"
                    className="rounded-xl cursor-pointer"
                  />
                </Link>
              </motion.div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Projects;
