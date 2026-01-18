import React from "react";
import {
    Crop,
    RefreshCcw,
    Sun,
    FlipHorizontal2,
    FlipVertical2
} from "lucide-react";

const FormatComponentUI = () => {
  return (
    <div className="flex flex-col items-center h-full">
      <p className="text-sm">Format</p>
      <div className="w-30 flex flex-wrap items-center justify-center gap-1">
        <Crop size={30} className="p-1 hover:p-[2px]"/>
        <RefreshCcw size={30} className="p-1 hover:p-[2px]"/>
        <Sun size={30} className="p-1 hover:p-[2px]"/>
        <FlipHorizontal2 size={30} className="p-1 hover:p-[2px]"/>
        <FlipVertical2 size={30} className="p-1 hover:p-[2px]"/>
      </div>
    </div>
  );
};

export default FormatComponentUI;
