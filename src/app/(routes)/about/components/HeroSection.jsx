"use client";

import React from "react";
import {
  InstagramIcon,
  LinkedinIcon,
  SendIcon,
  TwitterIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import IconButton from "@/app/components/IconButton";

const HeroSection = () => {
  return (
    <section className="w-full pt-20 md:px-20 lg:px-40">
      <div className="flex flex-col gap-10 items-center mb-20">
        <p className="text-6xl font-semibold flex flex-col items-center gap-5">
          Hi, I am
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff5e69] to-[#ffa84b]">
            Mohammad
          </span>
        </p>
        <p className="w-[420px] text-sm text-gray-300 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing Libero accusantium
          dolorum delectus id ratione ipsum tempora eaque.
        </p>
        <div className="flex flex-col gap-5">
          <div className="flex gap-3">
            <IconButton
              onClick={() => window.open("https://www.linkedin.com/")}
            >
              <LinkedinIcon />
            </IconButton>
            <IconButton onClick={() => window.open("https://www.x.com/")}>
              <TwitterIcon />
            </IconButton>
            <IconButton
              onClick={() => window.open("https://www.instagram.com/")}
            >
              <InstagramIcon />
            </IconButton>
          </div>
        </div>
        <Button
          className={"flex gap-2"}
          onClick={() => window.location.replace("/#contact")}
        >
          Hire Me <SendIcon />
        </Button>
      </div>
      <div className="grid grid-cols-4 grid-rows-2 gap-10 mb-40">
        <div className="col-span-1 row-span-2 rounded-xl bg-[url('/about-image.jpg')] bg-cover" />
        <div className="aspect-square col-span-2 row-span-2 rounded-xl bg-[url('/about-image.jpg')] bg-cover" />
        <div className="col-span-1 row-span-1 rounded-xl bg-[url('/about-image.jpg')] bg-cover" />
        <div className="col-span-1 row-span-1 rounded-xl bg-[url('/about-image.jpg')] bg-cover" />
      </div>
      <div className="flex justify-stretch mb-40">
        <Achievement number={10} text="Lorem ipsum dolor sit amet." />
        <div className="w-[1px] bg-gray-600" />
        <Achievement number={120} text="Lorem ipsum dolor sit amet sit amet." />
        <div className="w-[1px] bg-gray-600" />
        <Achievement number={60} text="Lorem ipsum dolor." />
      </div>
    </section>
  );
};

export default HeroSection;

const Achievement = ({ number, text }) => (
  <div className="flex flex-col gap-5 flex-1 items-center text-center">
    <span className="text-4xl text-transparent bg-clip-text bg-gradient-to-r from-[#b16cea] via-[#ff5e69] to-[#ffa84b] font-semibold w-fit">
      {number}+
    </span>
    <span className="text-sm text-gray-300 leading-7 max-w-36">{text}</span>
  </div>
);
