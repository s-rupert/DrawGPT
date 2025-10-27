import React, { useEffect, useState } from "react";
import Pencil from "../../Icons/Pencil";
import Pencil1 from "../../Icons/Pencil1";
import Pencil2 from "../../Icons/Pencil2";
import Pencil3 from "../../Icons/Pencil3";
import Pencil5 from "../../Icons/Pencil5";
import Pencil6 from "../../Icons/Pencil6";

const PencilCompUI = () => {
  const [selectedPencil, setSelectedPencil] = useState(null);
  const [PencilSize, setPencilSize] = useState([35, 35, 35, 35, 35, 35, 35]);

  useEffect(() => {
    const newSizes = [35, 35, 35, 35, 35, 35, 35];
    if (selectedPencil !== null) {
      newSizes[selectedPencil - 1] = 45;
    }
    setPencilSize(newSizes);
  }, [selectedPencil]);

  return (
    <div className="flex flex-col items-center h-full">
      <p className="text-sm">
        Pencils
      </p>
      <div className="flex gap-[0.5vw] items-center justify-center h-full">
        <Pencil size={PencilSize[0]} onClick={() => setSelectedPencil(1)} />
        <Pencil1 size={PencilSize[1]} onClick={() => setSelectedPencil(2)} />
        <Pencil2 size={PencilSize[2]} onClick={() => setSelectedPencil(3)} />
        <Pencil3 size={PencilSize[3]} onClick={() => setSelectedPencil(4)} />
        <Pencil5
          size={PencilSize[5]}
          className="text-yellow-500"
          onClick={() => setSelectedPencil(6)}
        />
        <Pencil6
          size={PencilSize[6]}
          className="text-red-600"
          onClick={() => setSelectedPencil(7)}
        />
      </div>
      <div className="flex gap-5 -mt-1 mb-2">
        <div className={`${selectedPencil === 1 ? "border-2 border-blue-500 rounded-lg w-4" : "rounded-lg w-4"}`} />
        <div className={`${selectedPencil === 2 ? "border-2 border-blue-500 rounded-lg w-4" : "rounded-lg w-4"}`} />
        <div className={`${selectedPencil === 3 ? "border-2 border-blue-500 rounded-lg w-4" : "rounded-lg w-4"}`} />
        <div className={`${selectedPencil === 4 ? "border-2 border-blue-500 rounded-lg w-4" : "rounded-lg w-4"}`} />
        <div className={`${selectedPencil === 6 ? "border-2 border-blue-500 rounded-lg w-4" : "rounded-lg w-4"}`} />
        <div className={`${selectedPencil === 7 ? "border-2 border-blue-500 rounded-lg w-4" : "rounded-lg w-4"}`} />

      </div>
    </div>
  );
};

export default PencilCompUI;
