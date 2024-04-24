import React from "react";
import PostCard from "./PostCard";
import { blogData } from "@/lib/data";

const BlogSection = () => {
  return (
    <section className="w-full pt-20 md:px-20 lg:px-40 mb-20">
      <div className="flex flex-col items-start gap-10">
        <h1 className="text-5xl font-semibold pb-1 w-fit text-transparent bg-clip-text bg-gradient-to-r from-[#ff5e69] to-[#ffa84b]">
          My Blog
        </h1>
        <div className="grid place-self-stretch grid-cols-2 gap-x-5 gap-y-10">
          {blogData.map((post, index) => (
            <PostCard key={index} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
