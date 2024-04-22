import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowLeftIcon } from "lucide-react";
import React from "react";

const ProjectCard = ({ project, index }) => {
  const { title, id, images, type } = project;
  return (
    <div
      style={{ backgroundImage: `url(${images[0]})` }}
      className={cn(
        "flex flex-col overflow-hidden bg-white text-[#161513] rounded-xl col-span-1 bg-cover",
        index % 4 === 0 || (index - 3) % 4 === 0 ? "row-span-1" : "row-span-10"
      )}
    >
      <div className="p-10 flex flex-col justify-end bg-gradient-to-t from-black to-[#00000022] flex-1">
        <p className="w-fit text-transparent bg-clip-text bg-gradient-to-r from-[#ff5e69] to-[#ffa84b] font-bold text-lg mt-40 flex items-center">
          <span className="text-sm pr-1 pb-1">●</span>
          <span>{type}</span>
        </p>
        <div className="flex items-center justify-between">
          <span className="text-white text-2xl">{title}</span>
          <Button
            className={cn(
              "group rounded-full aspect-square p-2 bg-none bg-white"
            )}
            onClick={() => (window.location.href = `/portfolio/projects/${id}`)}
          >
            <ArrowLeftIcon className="rotate-[135deg] text-gray-500 group-hover:text-white" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
