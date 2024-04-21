"use client";

import React from "react";
import {
  InstagramIcon,
  LinkedinIcon,
  SendIcon,
  StarIcon,
  TwitterIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import OutlineButton from "./OutlineButton";
import IconButton from "./IconButton";
import Image from "next/image";
import { cn } from "@/lib/utils";

const HeroSection = () => {
  return (
    <section className="w-full pt-20">
      <div className="md:px-20 lg:px-40 flex gap-40 justify-between">
        <div className="flex flex-col gap-10">
          <p className="text-7xl font-semibold">Hi!👋</p>
          <p className="text-7xl font-semibold">
            I'm{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff5e69] to-[#ffa84b]">
              Mohammad
            </span>
          </p>
          <div className="flex items-center gap-5">
            <span className="bg-gradient-to-r from-[#ff5e69] to-[#ffa84b] w-32 h-[2px] flex-1" />
            <h1 className="text-2xl">Web Developer</h1>
          </div>
          <p className="w-[420px] text-sm text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing Libero
            accusantium dolorum delectus id ratione ipsum tempora eaque.
          </p>
          <div className="flex gap-2">
            <Button
              className={"flex gap-2"}
              onClick={() => window.location.replace("#contact")}
            >
              Hire Me <SendIcon />
            </Button>

            <OutlineButton
              onClick={() => window.location.replace("/portfolio")}
            >
              View Portfolio
            </OutlineButton>
          </div>
          <div className="flex flex-col gap-5">
            <p>Follow Me:</p>
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
        </div>
        <div className="flex-1 flex justify-center items-center">
          <div className="bg-gradient-to-br from-[#b16cea]  via-[#ff5e69] to-[#ffa84b] rounded-full overflow-hidden">
            <Image src={"/hero-image.png"} width={300} height={500} />
          </div>
        </div>
      </div>
      <div className="my-10 relative h-80 overflow-hidden">
        <Strip />
        <Strip reversed />
      </div>
    </section>
  );
};

export default HeroSection;

const stripTags = ["Design", "Develop", "Discover"];

const Strip = ({ reversed = false }) => (
  <div
    className={cn(
      "h-20 w-[120%] bg-white absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 border-2 flex justify-center items-center gap-10",
      reversed ? "-rotate-[7deg]" : "rotate-[7deg]"
    )}
  >
    {[1, 2, 3].map(() =>
      stripTags.map((item) => (
        <>
          <span key={item} className="text-[#161513] text-3xl font-semibold">
            {item}
          </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff5e69] to-[#ffa84b] text-5xl">
            ✦
          </span>
        </>
      ))
    )}
  </div>
);

const Star = () => (
  <div className="h-5 w-5 bg-gradient-to-br from-[#ff5e69] to-[#ffa84b] rounded-ful" />
);
