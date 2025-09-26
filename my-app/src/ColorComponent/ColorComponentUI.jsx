import React, { useState, useEffect, useContext } from "react";
import BorderSize from "../Icons/BorderSize";
import { PageContext } from "../Components/PageContext";

const ColorComponentUI = () => {
  const {
    color,
    setColor,
    brushSize,
    setBrushSize,
    brushSizeOp,
    setBrushSizeOp,
  } = useContext(PageContext);

  return (
    <div className="flex items-center justify-center gap-[1vw]">
      <div className="flex items-center justify-center">
        <div>
          <div className="flex gap-1 py-1">
            <div
              className="w-5 h-5 rounded-full bg-gray-200 hover:border-2"
              onClick={() => setColor("#D1D5DB")}
            />
            <div
              className="w-5 h-5 rounded-full bg-lime-500 hover:border-2"
              onClick={() => setColor("#00ff00")}
            />
            <div
              className="w-5 h-5 rounded-full bg-yellow-500 hover:border-2"
              onClick={() => setColor("#ffff00")}
            />
            <div
              className="w-5 h-5 rounded-full bg-teal-500 hover:border-2"
              onClick={() => setColor("#008080")}
            />
            <div
              className="w-5 h-5 rounded-full bg-cyan-500 hover:border-2"
              onClick={() => setColor("#00ffff")}
            />
            <div
              className="w-5 h-5 rounded-full bg-green-500 hover:border-2"
              onClick={() => setColor("#008000")}
            />
            <div
              className="w-5 h-5 rounded-full bg-orange-500 hover:border-2"
              onClick={() => setColor("#FFA500")}
            />
          </div>
          <div className="flex gap-1 py-1">
            <div
              className="w-5 h-5 rounded-full bg-black hover:border-2"
              onClick={() => setColor("#000000")}
            />
            <div
              className="w-5 h-5 rounded-full bg-blue-500 hover:border-2"
              onClick={() => setColor("#0000ff")}
            />
            <div
              className="w-5 h-5 rounded-full bg-red-500 hover:border-2"
              onClick={() => setColor("#ff0000")}
            />
            <div
              className="w-5 h-5 rounded-full bg-pink-500 hover:border-2"
              onClick={() => setColor("#ff1493")}
            />
            <div
              className="w-5 h-5 rounded-full bg-indigo-500 hover:border-2"
              onClick={() => setColor("#4b0082")}
            />
            <div
              className="w-5 h-5 rounded-full bg-purple-500 hover:border-2"
              onClick={() => setColor("#800080")}
            />
            <div
              className="w-5 h-5 rounded-full bg-slate-500 hover:border-2"
              onClick={() => setColor("#708090")}
            />
          </div>
        </div>
      </div>
      <div className="flex-col justify-center items-center text-center">
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          className="w-10 h-10 cursor-pointer"
        />
        <p className="text-xs -mt-1">Select</p>
      </div>
      <div className="relative">
        <BorderSize size="30" onClick={() => setBrushSizeOp(!brushSizeOp)} />
        <div
          className={`absolute flex flex-col justify-center items-center text-center bg-gray-200 rounded-lg -left-15 ${
            brushSizeOp ? "" : "hidden"
          }`}
        >
          <p className="font-semibold">Brush Size</p>
          <div className="flex items-center justify-center p-3 gap-2">
            <input
              type="range"
              min="1"
              max="100"
              value={brushSize}
              onChange={(e) => setBrushSize(Number(e.target.value))}
              className="w-34 cursor-pointer accent-black"
            />
            <input
              type="number"
              min="1"
              max="100"
              value={brushSize}
              onChange={(e) => setBrushSize(Number(e.target.value))}
              className="w-10 text-center border-1 border-gray-700 rounded bg-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorComponentUI;
