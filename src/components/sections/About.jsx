import Image from "next/image";
import SectionHeader from "../shared/SectionHeader";
import Card from "../shared/Card";
import bookImage from "@/assets/images/book-cover.png";
import { hobbies, toolboxItem } from "@/constants";
import mapImage from "@/assets/images/map.png";
import smileMemoji from "@/assets/images/memoji-smile.png";
import { CardHeader } from "../shared/CardHeader";
import { ToolboxItems } from "../ToolboxItems";

export const AboutSection = () => {
  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto">
        <SectionHeader
          eyeBrow="About Me"
          title="A Glimpse into My World"
          description="A passionate Frontend Developer dedicated to crafting high-performance, user-friendly applications with modern technologies."
        />

        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 lg:grid-cols-3">
            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <CardHeader
                title="My Reads"
                description="Explore the books shaping my perspecrtives."
              />

              <div className="w-40 mx-auto mt-2 md:mt-0">
                <Image src={bookImage} alt="book" />
              </div>
            </Card>
            <Card className="h-[320px] p-0 md:col-span-3 lg:col-span-2">
              <CardHeader
                title="My Toolbox"
                description="Explore the technologies and tools I use to craft exceptional digital experiences."
              />

              <ToolboxItems toolboxItem={toolboxItem} className="mt-6" />
              <ToolboxItems
                toolboxItem={toolboxItem}
                className="mt-6"
                itemsWrapperClassName="-translate-x-1/2"
              />
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 lg:grid-cols-3">
            <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
              <CardHeader
                title="Beyond the Code"
                description="Explore my interests and hobbies that fuel my creativity and passion for technology."
              />

              <div className="relative flex-1">
                {hobbies.map((hobby, idx) => {
                  return (
                    <div
                      key={idx}
                      className="absolute inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5"
                      style={{
                        top: hobby.top,
                        left: hobby.left,
                      }}
                    >
                      <span className="font-medium text-gray-950">
                        {hobby.title}
                      </span>
                      <span>{hobby.emoji}</span>
                    </div>
                  );
                })}
              </div>
            </Card>

            <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
              <Image
                src={mapImage}
                alt="map"
                className="h-full w-full object-cover object-left-top"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 after:content-[''] after:absolute after:inset-0 after:outline-3 after:-outline-offset-2 after:rounded-full after:outline-gray-900/30">
                <Image src={smileMemoji} alt="memoji" className="size-20" />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
