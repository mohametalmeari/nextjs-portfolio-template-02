import Image from "next/image";
import React from "react";

const ProjectDetailsSection = ({
  project: { title, type, date, images, description, features },
}) => {
  return (
    <section className="w-full pt-20 mb-20">
      <div className="flex items-stretch gap-5 mb-10">
        <div className="flex-[2] flex flex-col">
          <div className="flex-[1]" />
          <div className="flex-[4]">
            <Image
              src={images[1] || images[0]}
              width={500}
              height={400}
              className="rounded-r-3xl object-cover object-right w-full h-full"
              alt="Project Image"
            />
          </div>
        </div>

        <div className="flex-[3] aspect-square">
          <Image
            src={images[0]}
            width={500}
            height={400}
            className="rounded-3xl object-cover w-full h-full"
            alt="Project Image"
          />
        </div>
        <div className="flex-[2] flex flex-col">
          <div className="flex-[1]" />
          <div className="flex-[4]">
            <Image
              src={images[1] || images[0]}
              width={500}
              height={400}
              className="rounded-l-3xl object-cover object-right w-full h-full"
              alt="Project Image"
            />
          </div>
        </div>
      </div>
      <div className="md:px-20 lg:px-40">
        <div className="flex justify-between items-end mb-20">
          <p className="text-gray-500">{date}</p>
          <p className="text-4xl capitalize">{title}</p>
          <p className="w-fit text-transparent bg-clip-text bg-gradient-to-r from-[#b16cea] via-[#ff5e69] to-[#ffa84b] font-bold text-lg flex items-center">
            <span className="text-sm pr-1 pb-1">●</span>
            <span>{type}</span>
          </p>
        </div>
        <div>
          <h2 className="text-xl mb-5">Overview</h2>
          <p className="text-gray-400 mb-10">{description}</p>
          <h2 className="text-xl mb-5">Key Features</h2>
          <div>
            {features.map((feature, index) => (
              <div key={index}>
                <h3 className="text-gray-50 mb-3">{feature?.title}</h3>
                <p className="text-gray-400">{feature?.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetailsSection;
