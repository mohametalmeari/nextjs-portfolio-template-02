import React from "react";

const educationData = [
  {
    uni: "University of California",
    degree: "BSc in Computer Science",
    year: "2016 - 2020",
  },
  {
    uni: "University of California",
    degree: "BSc in Computer Science",
    year: "2016 - 2020",
  },
  {
    uni: "University of California",
    degree: "BSc in Computer Science",
    year: "2016 - 2020",
  },
];

const workData = [
  {
    company: "Google",
    position: "Software Engineer",
    year: "2020 - Present",
  },
  {
    company: "Google",
    position: "Software Engineer",
    year: "2020 - Present",
  },
  {
    company: "Google",
    position: "Software Engineer",
    year: "2020 - Present",
  },
];

const QualificationsSection = () => {
  return (
    <section className="w-full pt-20 md:px-20 lg:px-40 grid grid-cols-2 gap-20 mb-40">
      <div className="flex flex-col gap-8">
        <h2 className="text-4xl text-transparent bg-clip-text bg-gradient-to-r from-[#b16cea] via-[#ff5e69] to-[#ffa84b] w-fit">
          Education
        </h2>
        <ul className="flex flex-col">
          {educationData.map((data, index) => (
            <li
              key={index}
              className="flex flex-col py-6 border-b border-gray-800"
            >
              <span className="uppercase text-lg">{data.uni}</span>
              <div className="flex justify-between text-gray-500">
                <span>{data.degree}</span>
                <span>
                  <span className="w-2 aspect-square bg-gray-500 inline-block rounded-full mr-2" />
                  {data.year}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col gap-8">
        <h2 className="text-4xl text-transparent bg-clip-text bg-gradient-to-r from-[#b16cea] via-[#ff5e69] to-[#ffa84b] w-fit">
          Work Experience
        </h2>
        <ul className="flex flex-col">
          {workData.map((data, index) => (
            <li
              key={index}
              className="flex flex-col py-6 border-b border-gray-800"
            >
              <span className="capitalize text-lg">{data.company}</span>
              <div className="flex justify-between text-gray-500">
                <span>{data.position}</span>
                <span>
                  <span className="w-2 aspect-square bg-gray-500 inline-block rounded-full mr-2" />
                  {data.year}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default QualificationsSection;
