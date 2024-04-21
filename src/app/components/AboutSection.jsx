import { Button } from "@/components/ui/button";
import { PaperclipIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

const AboutSection = () => {
  return (
    <section className="md:px-20 lg:px-40 w-full flex justify-between mb-40">
      <div className="flex-1 flex justify-center items-center">
        <div className="bg-gradient-to-br from-[#b16cea]  via-[#ff5e69] to-[#ffa84b] rounded-t-full overflow-hidden">
          <Image src={"/hero-image.png"} width={300} height={500} />
        </div>
      </div>
      <div className="flex-1 flex flex-col gap-10">
        <h2 className="text-6xl text-transparent bg-clip-text bg-gradient-to-r from-[#b16cea] via-[#ff5e69] to-[#ffa84b] place-self-start font-semibold">
          About Me
        </h2>
        <p className="text-sm text-gray-300 leading-7">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis,
          minus impedit ipsa sint architecto quisquam optio dolorem nihil
          aspernatur quis ut eos voluptatum debitis similique mollitia quibusdam
          repellat itaque placeat.
        </p>
        <div className="flex gap-5 justify-between">
          <Achievement number={10} text="Lorem ipsum dolor sit amet." />
          <Achievement
            number={120}
            text="Lorem ipsum dolor sit amet sit amet."
          />
          <Achievement number={60} text="Lorem ipsum dolor." />
        </div>
        <Button className="place-self-start flex gap-2">
          Download CV <PaperclipIcon />
        </Button>
      </div>
    </section>
  );
};

export default AboutSection;

const Achievement = ({ number, text }) => (
  <div className="flex flex-col gap-5 flex-1 max-w-36">
    <span className="text-4xl text-transparent bg-clip-text bg-gradient-to-r from-[#b16cea] via-[#ff5e69] to-[#ffa84b] place-self-start font-semibold">
      {number}+
    </span>
    <span className="text-sm text-gray-300 leading-7">{text}</span>
  </div>
);
