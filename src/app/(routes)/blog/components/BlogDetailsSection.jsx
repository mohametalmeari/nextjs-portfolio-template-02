import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogDetailsSection = ({ blog: { title, date, image, content } }) => {
  console.log(typeof content);
  return (
    <section className="w-full pt-5 mb-20 md:px-20 lg:px-40">
      <div className="flex flex-col max-w-[800px] mx-auto">
        <Link href="/blog" className="mb-5 w-fit hover:text-orange-500">
          <ArrowLeft />
        </Link>
        <div className="flex items-center mb-10 gap-20 justify-between">
          <h1 className="text-2xl w-[70%] capitalize">{title}</h1>
          <p className="text-nowrap text-gray-400">{date}</p>
        </div>
        <Image
          src={image}
          width={800}
          height={600}
          alt="Blog image"
          className="rounded-2xl w-full max-w-[800px] mb-10"
        />
        <div>
          {content.map((paragraph, index) => (
            <p key={index} className="mb-5 indent-10">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogDetailsSection;
