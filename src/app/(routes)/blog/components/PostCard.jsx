"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeftIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

const PostCard = ({ post }) => {
  const { title, date, image, link } = post;
  console.log(post);

  return (
    <div className="flex flex-col gap-5">
      <Image
        src={image}
        width={500}
        height={500}
        alt="Post Image"
        className="rounded-3xl object-cover w-full"
      />
      <p className="text-gray-500">{date}</p>
      <div className="flex-1 flex flex-col justify-end">
        <div className="flex justify-between items-end justify-self-end">
          <div className=" w-[70%]  flex items-end">
            <h2 className="text-2xl max-h-[70px] text-ellipsis line-clamp-2">
              {title}
            </h2>
          </div>
          <Button
            className="group rounded-full aspect-square p-2 bg-none bg-white"
            onClick={() => (window.location.href = link)}
          >
            <ArrowLeftIcon className="rotate-[135deg] text-gray-500 group-hover:text-white" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
