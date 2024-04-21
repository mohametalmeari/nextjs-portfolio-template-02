import {
  FacebookIcon,
  GithubIcon,
  GitlabIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
  YoutubeIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const NetworkingSection = () => {
  return (
    <section className="w-full pt-20 md:px-20 lg:px-40 flex gap-20 mb-40 justify-center">
      <div>
        <Image
          className="rounded-full aspect-square object-cover object-top bg-gradient-to-r from-gray-500 to-gray-100"
          src={"/hero-image.png"}
          width={300}
          height={500}
        />
      </div>
      <div className="bg-gradient-to-r from-[#b16cea] via-[#ff5e69] to-[#ffa84b] p-[1px] w-[600px] rounded-3xl my-5">
        <div className="bg-[#1e1e1e] rounded-3xl flex flex-col items-start justify-center w-full h-full px-28">
          <span className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-[#b16cea] via-[#ff5e69] to-[#ffa84b] w-fit">
            Follow me
          </span>
          <p className="text-sm text-gray-300 leading-7 py-5 border-b border-gray-500">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Dignissimos aliquid ex.
          </p>
          <div className="flex justify-between w-full pt-5">
            <Link href="https://www.facebook.com/" target="_blank">
              <FacebookIcon />
            </Link>
            <Link href="https://www.linkedin.com/" target="_blank">
              <LinkedinIcon />
            </Link>
            <Link href="https://www.x.com/" target="_blank">
              <TwitterIcon />
            </Link>
            <Link href="https://www.instegram.com/" target="_blank">
              <InstagramIcon />
            </Link>
            <Link href="https://www.gitlab.com/" target="_blank">
              <GitlabIcon />
            </Link>
            <Link href="https://www.github.com/" target="_blank">
              <GithubIcon />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NetworkingSection;
