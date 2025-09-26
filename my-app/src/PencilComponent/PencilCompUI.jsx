import React, { useEffect, useState } from "react";
import Pencil from "../Icons/Pencil";
import Pencil1 from "../Icons/Pencil1";
import Pencil2 from "../Icons/Pencil2";
import Pencil3 from "../Icons/Pencil3";
import Pencil4 from "../Icons/Pencil4";
import Pencil5 from "../Icons/Pencil5";
import Pencil6 from "../Icons/Pencil6";

const PencilCompUI = () => {
  const [selectedPencil, setSelectedPencil] = useState(null);
  const [PencilSize, setPencilSize] = useState([30, 30, 30, 30, 30, 30, 30]);

  useEffect(() => {
    const newSizes = [30, 30, 30, 30, 30, 30, 30];
    if (selectedPencil !== null) {
      newSizes[selectedPencil - 1] = 40;
    }
    setPencilSize(newSizes);
  }, [selectedPencil]);
  
  return (
    <div className="flex pb-1 gap-[0.5vw] items-center justify-center">
      <Pencil size={PencilSize[0]} onClick={() => setSelectedPencil(1)} />
      <Pencil1 size={PencilSize[1]} onClick={() => setSelectedPencil(2)} />
      <Pencil2 size={PencilSize[2]} onClick={() => setSelectedPencil(3)} />
      <Pencil3 size={PencilSize[3]} onClick={() => setSelectedPencil(4)} />
      <Pencil4 size={PencilSize[4]} onClick={() => setSelectedPencil(5)} />
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
  );
};

export default PencilCompUI;
