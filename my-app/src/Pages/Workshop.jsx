import React, { useContext, useState } from "react";
import {
  Save,
  Share,
  Redo2,
  Undo2,
  ChevronDown,
  ChevronUp,
  UserRound,
  Settings,
  Image,
  SquareDashedMousePointer,
  PencilRuler,
  Eraser,
  Smile,
  Ruler,
} from "lucide-react";
import OpFileComponent from "../FileComponent/OpFileComponent";
import OpEditComponent from "../EditComponent/OpEditComponent";
import OpViewComponent from "../ViewComponent/OpViewComponent";
import CanvasDraw from "../Components/CanvasDraw";
import PencilCompUI from "../PencilComponent/PencilCompUI";

import Shapes from "../Icons/Shapes";
import { PageContext } from "../Components/PageContext";
import ColorComponentUI from "../ColorComponent/ColorComponentUI";

const Workshop = () => {
  const [uiInterface, setUiInterface] = useState(true);
  const {
    FuncOption,
    drawMode,
    setDrawMode,
    screenTransparancy,
    setScreenTransparancy,
    undoFn,
    redoFn,
    history,
    redoStack,
  } = useContext(PageContext);
  return (
    <div className="relative w-full h-full" onClick={() => FuncOption()}>
      <div className="flex justify-between bg-gray-500 text-white h-8">
        <div className="flex flex-row h-8 text-white items-center">
          <OpFileComponent />
          <OpEditComponent />
          <OpViewComponent />
          <Save
            size={30}
            className="py-1 px-1 ml-3 rounded-md hover:text-black hover:bg-gray-400"
          />
          <Share
            size={30}
            className="py-1 px-1 ml-3 rounded-md hover:text-black hover:bg-gray-400"
          />
          <Redo2
            size={30}
            onClick={redoFn}
            className={`py-1 px-1 ml-3 rounded-md hover:text-black hover:bg-gray-400 ${
              redoStack.length === 0 ? "opacity-50" : ""
            }`}
          />
          <Undo2
            size={30}
            onClick={undoFn}
            className={`py-1 px-1 ml-3 rounded-md hover:text-black hover:bg-gray-400 ${
              history.length === 0 ? "opacity-50" : ""
            }`}
          />
        </div>
        <div className="flex flex-row h-8 text-white items-center">
          <div onClick={() => setUiInterface(!uiInterface)}>
            <ChevronDown
              size={30}
              className={`rounded-md hover:text-black hover:bg-gray-400 py-1 px-1 ml-3 ${
                uiInterface ? "" : "hidden"
              }`}
            />
            <ChevronUp
              size={30}
              className={`rounded-md hover:text-black hover:bg-gray-400 py-1 px-1 ml-3 ${
                uiInterface ? "hidden" : ""
              }`}
            />
          </div>
          <div
            className={`rounded-md hover:text-black hover:bg-gray-400 py-1 px-3 ${
              screenTransparancy ? "bg-gray-400" : ""
            }`}
            onClick={() => setScreenTransparancy(!screenTransparancy)}
          >
            Transparent
          </div>
          <UserRound
            size={30}
            className="rounded-md hover:text-black hover:bg-gray-400 py-1 px-1 ml-3"
          />
          <Settings
            size={30}
            className="rounded-md hover:text-black hover:bg-gray-400 py-1 px-1 ml-3"
          />
        </div>
      </div>
      <div
        className={`bg-gray-500 flex gap-[1px] ${
          uiInterface ? "block" : "hidden"
        }`}
      >
        <div className="flex-1 bg-gray-300 py-1">
          <div className="flex justify-center items-center h-full">
            <div className="h-full text-center flex flex-col items-center justify-center">
              <SquareDashedMousePointer size={20} />
              <div className="text-sm font-semibold">Selection</div>
            </div>
            <div className="h-full text-center flex items-center justify-center hover:text-white">
              <ChevronDown size={20} />
            </div>
          </div>
        </div>
        <div className="flex-1 bg-gray-300 py-1">
          <div className="flex justify-center items-center h-full">
            <div className="h-full text-center flex flex-col items-center justify-center">
              <Image size={20} />
              <div className="text-sm font-semibold">Image</div>
            </div>
            <div className="h-full text-center flex items-center justify-center hover:text-white">
              <ChevronDown size={20} />
            </div>
          </div>
        </div>
        <div className="flex-1 bg-gray-300 py-1">
          <div className="flex justify-center items-center h-full">
            <div className="h-full text-center flex flex-col items-center justify-center">
              <Shapes size={20} />
              <div className="text-sm font-semibold">Shapes</div>
            </div>
            <div className="h-full text-center flex items-center justify-center hover:text-white">
              <ChevronDown size={20} />
            </div>
          </div>
        </div>
        <div className="flex-1 bg-gray-300 py-1">
          <div className="flex justify-center items-center h-full">
            <div className="h-full text-center flex flex-col items-center justify-center">
              <PencilRuler size={20} />
              <div className="text-sm font-semibold">Tools</div>
            </div>
            <div className="h-full text-center flex items-center justify-center hover:text-white">
              <ChevronDown size={20} />
            </div>
          </div>
        </div>
        <div className="flex-1 bg-gray-300 py-1">
          <div className="flex justify-center items-center h-full">
            <div className="h-full text-center flex flex-col items-center justify-center">
              <Eraser
                size={30}
                className={`p-1 ${
                  drawMode
                    ? "hover:p-[2px]"
                    : "p-0 border-1 border-gray-500 rounded-lg"
                }`}
                onClick={() => setDrawMode(!drawMode)}
              />
              <div className="text-sm font-semibold">Eraser</div>
            </div>
            <div className="h-full text-center flex items-center justify-center hover:text-white">
              <ChevronDown size={20} />
            </div>
          </div>
        </div>
        <div className="flex-2 bg-gray-300 p-1">
          <div className="flex items-center justify-center h-full">
            <div className="text-sm transform rotate-[-90deg] font-semibold px-1">
              Pencil
            </div>
            <PencilCompUI />
          </div>
        </div>
        <div className="flex-2 bg-gray-300 p-1">
          <div className="flex justify-center items-center h-full">
            <div className="text-sm transform rotate-[-90deg] font-semibold px-1">
              Color
            </div>
            <ColorComponentUI />
          </div>
        </div>
        <div className="flex-1 bg-gray-300 py-1">
          <div className="flex items-center justify-center h-full">
            <div className="flex flex-col items-center justify-center">
              <Smile size={20} />
              <div className="text-sm font-semibold">Emoji</div>
            </div>
            <div className="ml-1 hover:text-white">
              <ChevronDown size={20} />
            </div>
          </div>
        </div>
        <div className="flex-1 bg-gray-300 py-1">
          <div className="flex items-center justify-center h-full">
            <div className="flex flex-col items-center justify-center">
              <Ruler size={20} />
              <div className="text-sm font-semibold">Ruler</div>
            </div>
            <div className="ml-1 hover:text-white">
              <ChevronDown size={20} />
            </div>
          </div>
        </div>
      </div>
      <CanvasDraw className="relative" />
    </div>
  );
};

export default Workshop;
