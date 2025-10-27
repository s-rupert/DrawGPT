import React, { useState, useEffect, useContext } from "react";
import BorderSize from "../../Icons/BorderSize";
import { PageContext } from "../PageContext";

const ColorComponentUI = () => {
  const {
    setDrawMode,
    color,
    setColor,
    brushSize,
    setBrushSize,
    brushSizeOp,
    setBrushSizeOp,
  } = useContext(PageContext);

  return (
    <div className="flex flex-col items-center h-full">
      <p className="text-sm">
        Color
      </p>
      <div className="flex items-center justify-center gap-[1vw] h-full">
        <div className="w-7 h-7 rounded-full" style={{ backgroundColor: color }} />
        <div className="flex items-center justify-center">
          <div onClick={() => setDrawMode("draw")}>
            <div className="flex gap-1 py-1">
              <div
                className="w-5 h-5 rounded-full bg-lime-500 hover:border-1"
                onClick={() => setColor("#00ff00")}
              />
              <div
                className="w-5 h-5 rounded-full bg-yellow-500 hover:border-1"
                onClick={() => setColor("#ffff00")}
              />
              <div
                className="w-5 h-5 rounded-full bg-teal-500 hover:border-1"
                onClick={() => setColor("#008080")}
              />
              <div
                className="w-5 h-5 rounded-full bg-cyan-500 hover:border-1"
                onClick={() => setColor("#00ffff")}
              />
              <div
                className="w-5 h-5 rounded-full bg-green-500 hover:border-1"
                onClick={() => setColor("#008000")}
              />
              <div
                className="w-5 h-5 rounded-full bg-orange-500 hover:border-1"
                onClick={() => setColor("#FFA500")}
              />
            </div>
            <div className="flex gap-1 py-1">
              <div
                className="w-5 h-5 rounded-full bg-blue-500 hover:border-1"
                onClick={() => setColor("#0000ff")}
              />
              <div
                className="w-5 h-5 rounded-full bg-red-500 hover:border-1"
                onClick={() => setColor("#ff0000")}
              />
              <div
                className="w-5 h-5 rounded-full bg-pink-500 hover:border-1"
                onClick={() => setColor("#ff1493")}
              />
              <div
                className="w-5 h-5 rounded-full bg-indigo-500 hover:border-1"
                onClick={() => setColor("#4b0082")}
              />
              <div
                className="w-5 h-5 rounded-full bg-purple-500 hover:border-1"
                onClick={() => setColor("#800080")}
              />
              <div
                className="w-5 h-5 rounded-full bg-slate-500 hover:border-1"
                onClick={() => setColor("#708090")}
              />
            </div>
          </div>
        </div>
        <div className="flex-col justify-center items-center text-center">
          <label
            className={`relative h-10 w-10 inline-block rounded-full overflow-hidden cursor-pointer`}
            aria-label="Choose color"
          >
            <img src="/colorpalette.png" alt="color wheel" className="w-auto h-auto block" />

            <input
              type="color"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              className="absolute inset-0 w-full h-full opacity-0 border-0 p-0 m-0 rounded-full cursor-pointer"
              aria-label="Choose color"
            />
          </label>
          <p className="text-xs -mt-1">Select</p>
        </div>
        <div className="relative">
          <BorderSize size="30" onClick={() => setBrushSizeOp(!brushSizeOp)} />
          <div
            className={`absolute flex flex-col justify-center items-center text-center bg-gray-200 rounded-lg -left-15 ${brushSizeOp ? "" : "hidden"
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
    </div>
  );
};

export default ColorComponentUI;
