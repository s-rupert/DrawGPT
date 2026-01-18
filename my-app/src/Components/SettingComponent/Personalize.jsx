import React, { useState } from "react";

const Personalize = () => {
  const [undoRedoActions, setUndoRedoActions] = useState(20);
  return (
    <div className="absolute z-1 bg-blue-500 right-1 w-100 rounded-md text-white text-left p-4 mt-1 shadow-lg text-sm">
      <h1 className="text-lg font-bold text-center">Personalize</h1>
      <div className="flex items-center mb-2">
        <p>Number of undo and redo actions :</p>

        <input
          className="mx-2 rounded-sm bg-white text-black p-1 w-10"
          type="number"
          min={15}
          max={100}
          value={undoRedoActions}
          onChange={(e) => setUndoRedoActions(e.target.value)}
        />
        <p className="text-gray-400 italic "> max 100;</p>
      </div>
      <div className="flex gap-3 items-center justify-end">
        <button className="px-2 py-1 bg-blue-300 text-black rounded-lg">Cancel</button>
        <button className="px-2 py-1 bg-blue-300 text-black rounded-lg">Save</button>
      </div>
    </div>
  );
};

export default Personalize;
