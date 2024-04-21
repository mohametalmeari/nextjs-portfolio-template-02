import Image from "next/image";
import React from "react";

const companies = [
  "./amazon-logo.svg",
  "./amazon-logo.svg",
  "./amazon-logo.svg",
  "./amazon-logo.svg",
  "./amazon-logo.svg",
  "./amazon-logo.svg",
  "./amazon-logo.svg",
  "./amazon-logo.svg",
  "./amazon-logo.svg",
  "./amazon-logo.svg",
];

const CompaniesSection = () => {
  return (
    <section className="w-full pt-20 md:px-20 lg:px-40 flex flex-col items-center gap-20 mb-40">
      <h2 className="text-6xl">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#b16cea] to-[#ff5e69]">
          Companies{" "}
        </span>
        I've worked with
      </h2>
      <div className="grid grid-cols-5 w-full gap-y-10">
        {companies.map((src) => (
          <div className="flex justify-center items-center">
            <div className="bg-white px-5 py-3 rounded-lg w-fit">
              <Image src={src} width={80} height={40} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CompaniesSection;
