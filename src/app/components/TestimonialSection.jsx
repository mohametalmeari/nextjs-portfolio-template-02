"use client";

import { ArrowLeftIcon, QuoteIcon } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const TestimonialData = [
  {
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, minus impedit ipsa sint architecto quisquam optio dolorem nihil aspernatur quis ut eos voluptatum debitis similique mollitia quibusdam repellat itaque placeat.",
    name: "Jack Doe",
    position: "UI/UX Designer",
    image: "/hero-image.png",
  },
  {
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, minus impedit ipsa sint architecto quisquam optio dolorem nihil aspernatur quis ut eos voluptatum debitis similique mollitia quibusdam repellat itaque placeat.",
    name: "Jack Doe",
    position: "UI/UX Designer",
    image: "/hero-image.png",
  },
  {
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, minus impedit ipsa sint architecto quisquam optio dolorem nihil aspernatur quis ut eos voluptatum debitis similique mollitia quibusdam repellat itaque placeat.",
    name: "Jack Doe",
    position: "UI/UX Designer",
    image: "/hero-image.png",
  },
  {
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, minus impedit ipsa sint architecto quisquam optio dolorem nihil aspernatur quis ut eos voluptatum debitis similique mollitia quibusdam repellat itaque placeat.",
    name: "Jack Doe",
    position: "UI/UX Designer",
    image: "/hero-image.png",
  },
  {
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, minus impedit ipsa sint architecto quisquam optio dolorem nihil aspernatur quis ut eos voluptatum debitis similique mollitia quibusdam repellat itaque placeat.",
    name: "Jack Doe",
    position: "UI/UX Designer",
    image: "/hero-image.png",
  },
];

const TestimonialSection = () => {
  const [current, setCurrent] = useState(0);
  return (
    <section className="md:px-20 lg:px-40 w-full flex justify-between mb-40">
      <div className="flex-1 flex justify-center items-center">
        <div className="bg-gradient-to-br from-[#b16cea]  via-[#ff5e69] to-[#ffa84b] rounded-t-full overflow-hidden">
          <Image
            src={TestimonialData[current].image}
            width={300}
            height={500}
          />
        </div>
      </div>
      <div className="flex-1 flex flex-col gap-10">
        <h2 className="text-5xl">Testimonial</h2>
        <p className="text-md text-gray-300 leading-7">
          <QuoteIcon
            className="inline mr-1 rotate-180 mb-2"
            width={12}
            fill="white"
          />
          {TestimonialData[current].message}
          <QuoteIcon className="inline ml-1 -mb-1" width={12} fill="white" />
        </p>
        <p className="flex flex-col gap-2">
          <span className="font-semibold capitalize">
            By {TestimonialData[current].name}
          </span>
          <span className="text-gray-300 capitalize">
            {TestimonialData[current].position}
          </span>
        </p>
        <div className="flex justify-between mt-auto">
          <div className="flex gap-1 items-center">
            {TestimonialData.map((_, index) => (
              <div
                className={cn(
                  "w-2 aspect-square bg-gray-500 rounded-full",
                  index === current && "bg-white"
                )}
              />
            ))}
          </div>
          <div className="flex gap-2">
            <Button
              className={cn(
                "rounded-full aspect-square p-2",
                current === 0 && "bg-none ring-2 ring-white"
              )}
              disabled={current === 0}
              onClick={() => setCurrent((prev) => prev - 1)}
            >
              <ArrowLeftIcon />
            </Button>
            <Button
              className={cn(
                "rounded-full aspect-square p-2",
                current === TestimonialData.length - 1 &&
                  "bg-none ring-2 ring-white"
              )}
              disabled={current === TestimonialData.length - 1}
              onClick={() => setCurrent((prev) => prev + 1)}
            >
              <ArrowLeftIcon className="rotate-180" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
