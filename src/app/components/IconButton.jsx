import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import React from "react";

const IconButton = ({ children, className, onClick }) => {
  return (
    <Button
      className={cn(
        "p-[1px] flex items-stretch justify-stretch rounded-full",
        className
      )}
      variant="outline"
      onClick={onClick}
    >
      <span className="bg-[#161512] flex items-center justify-center rounded-full p-2 aspect-square">
        {children}
      </span>
    </Button>
  );
};

export default IconButton;
