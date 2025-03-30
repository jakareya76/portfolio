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
    <section className="py-20">
      <div className="container mx-auto">
        <SectionHeader
          eyeBrow="About Me"
          title="A Glimpse into My World"
          description="A passionate Frontend Developer dedicated to crafting high-performance, user-friendly applications with modern technologies."
        />

        <div className="mt-20 flex flex-col gap-8">
          <Card className="h-[320px]">
            <CardHeader
              title="My Reads"
              description="Explore the books shaping my perspecrtives."
            />

            <div className="w-40 mx-auto mt-8">
              <Image src={bookImage} alt="book" />
            </div>
          </Card>
          <Card className="h-[320px] p-0">
            <CardHeader
              className="px-6 pt-6"
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

          <Card className="h-[320px] p-0 flex flex-col">
            <CardHeader
              className="px-6 py-6"
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

          <Card>
            <Image src={mapImage} alt="map" />
            <Image src={smileMemoji} alt="memoji" />
          </Card>
        </div>
      </div>
    </section>
  );
};
