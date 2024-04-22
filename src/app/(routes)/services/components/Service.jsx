"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

const Service = ({ title, description, image, link, index }) => {
  return (
    <div className="flex py-20">
      <div
        className={cn(
          "flex-1 rounded-2xl overflow-hidden",
          index % 2 === 0 && "order-1"
        )}
      >
        <Image
          className="rounded-2xl w-full h-full object-cover object-top bg-gradient-to-r from-gray-500 to-gray-100"
          src={image}
          width={684}
          height={410}
          alt={title}
        />
      </div>
      <div className="flex-1">
        <div
          className={cn(
            "my-10 flex flex-col gap-10",
            index % 2 === 0 ? "pr-20" : "pl-20"
          )}
        >
          <h2 className="text-2xl font-semibold">{title}</h2>
          <p className="text-gray-300">{description}</p>
          <Button
            className="place-self-start"
            onClick={() => (window.location.href = link)}
          >
            View Project
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Service;
