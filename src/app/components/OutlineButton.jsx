import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import React from "react";

const OutlineButton = ({ children, className, onClick }) => {
  return (
    <Button
      className={cn(
        "p-[1px] flex items-stretch justify-stretch group",
        className
      )}
      variant="outline"
      onClick={onClick}
    >
      <span className="bg-[#161512] flex items-center justify-center rounded-md px-4 py-2 group-hover:bg-transparent">
        {children}
      </span>
    </Button>
  );
};

export default OutlineButton;
