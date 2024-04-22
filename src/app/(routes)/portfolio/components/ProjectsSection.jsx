"use client";

import React, { useState } from "react";
import Categories from "./Categories";
import ProjectCard from "./ProjectCard";
import { categories, projectsData } from "@/lib/data";

const ProjectsSection = () => {
  const [currentCategory, setCurrentCategory] = useState("All");
  const filteredProjects = projectsData.filter((project) => {
    if (currentCategory === "All") return true;
    return project.categories.includes(currentCategory);
  });

  return (
    <section className="w-full pt-20 md:px-20 lg:px-40 mb-20">
      <div className="flex flex-col items-center gap-10">
        <h1 className="text-5xl font-semibold pb-1 w-fit text-transparent bg-clip-text bg-gradient-to-r from-[#ff5e69] to-[#ffa84b]">
          My Portfolio
        </h1>
        <Categories
          categories={categories}
          current={currentCategory}
          onClick={(value) => setCurrentCategory(value)}
        />
        <div className="grid place-self-stretch grid-cols-2 gap-5">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
