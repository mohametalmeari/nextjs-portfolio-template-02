import React from "react";
import Service from "./Service";

const servicesData = [
  {
    title: "UI/UX Design",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, minus impedit ipsa sint architecto quisquam optio dolorem nihil aspernatur quis ut eos voluptatum debitis similique mollitia quibusdam repellat itaque placeat.",
    image: "/about-image.jpg",
    link: "/",
  },
  {
    title: "UI/UX Design",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, minus impedit ipsa sint architecto quisquam optio dolorem nihil aspernatur quis ut eos voluptatum debitis similique mollitia quibusdam repellat itaque placeat.",
    image: "/about-image.jpg",
    link: "/",
  },
  {
    title: "UI/UX Design",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, minus impedit ipsa sint architecto quisquam optio dolorem nihil aspernatur quis ut eos voluptatum debitis similique mollitia quibusdam repellat itaque placeat.",
    image: "/about-image.jpg",
    link: "/",
  },
];

const ServicesSection = () => {
  return (
    <section className="w-full pt-20 md:px-20 lg:px-40">
      <div className="flex flex-col items-center">
        <h1 className="text-5xl font-semibold pb-1 w-fit text-transparent bg-clip-text bg-gradient-to-r from-[#ff5e69] to-[#ffa84b]">
          My Services
        </h1>
        {servicesData.map((service, index) => (
          <Service key={index} {...service} index={index} />
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
