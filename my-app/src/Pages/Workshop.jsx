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
  Pipette,
  Ruler,
  ZoomIn,
  PaintBucket,
  Type,
  Expand,
  Shrink,
} from "lucide-react";
import OpFileComponent from "../Components/FileComponent/OpFileComponent";
import OpEditComponent from "../Components/EditComponent/OpEditComponent";
import OpViewComponent from "../Components/ViewComponent/OpViewComponent";
import CanvasDraw from "../Components/CanvasDraw";
import PencilCompUI from "../Components/PencilComponent/PencilCompUI";

import ShapesIcon from "../Icons/ShapesIcon";
import { PageContext } from "../Components/PageContext";
import ColorComponentUI from "../Components/ColorComponent/ColorComponentUI";
import Selections from "../Components/SelectionComponent/Selections";
import Shapes from "../Components/ShapesComponent/Shapes";

const Workshop = () => {
  const {
    FuncOption,
    actionMode,
    setActionMode,
    screenTransparancy,
    setScreenTransparancy,
    undo,
    redo,
    history,
    redoStack,
    sizeOptionIsOpen,
    setSizeOptionIsOpen,
    uiInterface,
    setUiInterface,
    statusInterface,
    setStatusInterface,
    windowSize,
    setWindowSize,
    screenSize,
    setScreenSize
  } = useContext(PageContext);
  const [shrink, setShrink] = useState(false);
  return (
    <div className="relative w-full h-full bg-blue-100" onClick={() => FuncOption()}>
      <div className="absolute flex items-center justify-center w-full h-full z-0 overflow-auto">
        <div className="flex items-center justify-center min-w-full min-h-full">
          <CanvasDraw className="border-1" />
        </div>
      </div>
      <div className="flex justify-between bg-blue-500 text-white h-8 relative">
        <div className="flex flex-row h-8 text-white items-center">
          <OpFileComponent />
          <OpEditComponent />
          <OpViewComponent />
          <Save
            size={30}
            className="py-1 px-1 ml-3 rounded-md hover:text-black hover:bg-blue-400"
          />
          <Share
            size={30}
            className="py-1 px-1 ml-3 rounded-md hover:text-black hover:bg-blue-400"
          />
          <Undo2
            size={30}
            onClick={undo}
            className={`py-1 px-1 ml-3 rounded-md hover:text-black hover:bg-blue-400 ${history.length === 0 ? "opacity-50" : ""
              }`}
          />
          <Redo2
            size={30}
            onClick={redo}
            className={`py-1 px-1 ml-3 rounded-md hover:text-black hover:bg-blue-400 ${redoStack.length === 0 ? "opacity-50" : ""
              }`}
          />
        </div>
        <div className="flex flex-row h-8 text-white items-center">
          <div onClick={() => {
            setUiInterface(!uiInterface)
            if (!statusInterface && !uiInterface) {
              setStatusInterface(true);
            }else {
              setStatusInterface(false);
            }
          }}>
            <ChevronDown
              size={30}
              className={`rounded-md hover:text-black hover:bg-blue-400 py-1 px-1 ml-3 ${uiInterface ? "" : "hidden"
                }`}
            />
            <ChevronUp
              size={30}
              className={`rounded-md hover:text-black hover:bg-blue-400 py-1 px-1 ml-3 ${uiInterface ? "hidden" : ""
                }`}
            />
          </div>
          <div
            className={`rounded-md hover:text-black hover:bg-blue-400 py-1 px-3 ${screenTransparancy ? "bg-gray-400" : ""
              }`}
            onClick={() => {
              setScreenTransparancy(!screenTransparancy)
            }}
          >
            Transparent
          </div>
          <UserRound
            size={30}
            className="rounded-md hover:text-black hover:bg-blue-400 py-1 px-1 ml-3"
          />
          <Settings
            size={30}
            className="rounded-md hover:text-black hover:bg-blue-400 py-1 px-1 ml-3"
          />
        </div>
      </div>
      <div
        className={`bg-blue-300 flex px-2 relative ${uiInterface ? "block" : "hidden"
          }`}
      >
        <div className="py-1 px-2">
          <Selections />
        </div>

        <div className="bg-black border-1 my-3 opacity-50" />
        <div className="py-1 px-2 flex flex-col items-center">
          <p className="text-sm">Tools</p>
          <div className="w-40 flex flex-wrap items-center justify-center gap-1">
            <Image size={30} className="p-1 hover:p-[2px]" />
            <Eraser
              size={30}
              className={`p-1 ${actionMode === "draw"
                ? "hover:p-[2px]"
                : "p-0 border-1 border-gray-500 rounded-lg"
                }`}
              onClick={() => {
                if (actionMode !== "erase") {
                  setActionMode("erase");
                } else {
                  setActionMode("draw");
                }
              }}
            />
            <Type size={30} className="p-1 hover:p-[2px]" />
            <Smile size={30} className="p-1 hover:p-[2px]" />
            <Ruler size={30} className="p-1 hover:p-[2px]" />
            <Pipette size={30} className="p-1 hover:p-[2px]" />
            <ZoomIn size={30} className="p-1 hover:p-[2px]" />
            <PaintBucket size={30} className="p-1 hover:p-[2px]" />

          </div>
        </div>

        <div className="bg-black border-1 my-3 opacity-50" />
        <div className="py-1 px-3 flex flex-col items-center">
          <p className="text-sm">Shapes</p>
          <Shapes />
        </div>

        <div className="bg-black border-1 my-3 opacity-50" />
        <div className="py-1 px-5">
          <PencilCompUI />
        </div>

        <div className="bg-black border-1 my-3 opacity-50" />
        <div className="py-1 px-5">
          <ColorComponentUI />
        </div>

        <div className="bg-black border-1 my-3 opacity-50" />

      </div>

      <div className={`absolute bottom-6 flex items-center justify-between bg-blue-300 w-full px-3 rounded-lg ${statusInterface ? "" : "hidden"}`}>
        <div className="flex items-center gap-[1vw]">
          <div className="w-6 h-6 rounded border-1"></div>
          <p className="opacity-60">{Math.round(windowSize.width)} × {Math.round(windowSize.height)}</p>
        </div>

        <div className="flex items-center gap-[1vw]">
          <div className="p-[1px] border-1 rounded-lg hover:bg-blue-400 cursor-pointer m-[5px]" onClick={() => setShrink(!shrink)}>
            <Shrink className={`${shrink ? "hidden" : ""}`} onClick={() => setScreenSize(70)} />
            <Expand className={`${shrink ? "" : "hidden"}`} onClick={() => setScreenSize(100)} />
          </div>
          <div className="flex items-center border rounded-lg overflow-hidden">
            <input
              key={screenSize}
              type="number"
              name="zoom"
              defaultValue={screenSize}
              onBlur={(e) => {
                let value = parseInt(e.target.value);
                if (value < 25) {
                  value = 25;
                }
                if (value > 250) {
                  value = 250;
                }
                setScreenSize(value);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  let value = parseInt(e.target.value);
                  if (value < 25) {
                    value = 25;
                  }
                  if (value > 250) {
                    value = 250;
                  }
                  setScreenSize(value);
                }
              }}
              className="[appearance:textfield] 
           [&::-webkit-outer-spin-button]:appearance-none 
           [&::-webkit-inner-spin-button]:appearance-none 
           w-15 pl-2 py-1 pr-6 text-sm text-right 
           focus:outline-none"
            />
            <span className="-ml-6 text-sm">%</span>
            <ChevronDown size={18} className="mx-1 hover:text-white" onClick={() => setSizeOptionIsOpen(!sizeOptionIsOpen)} />
            <div className={`absolute bottom-10 bg-blue-200 text-black rounded-lg shadow-lg ${sizeOptionIsOpen ? 'block' : 'hidden'}`}>
              <div className="hover:bg-blue-400 px-4 py-1 rounded-lg" onClick={() => setScreenSize(25)}>25%</div>
              <div className="hover:bg-blue-400 px-4 py-1 rounded-lg" onClick={() => setScreenSize(50)}>50%</div>
              <div className="hover:bg-blue-400 px-4 py-1 rounded-lg" onClick={() => setScreenSize(75)}>75%</div>
              <div className="hover:bg-blue-400 px-4 py-1 rounded-lg" onClick={() => setScreenSize(100)}>100%</div>
              <div className="hover:bg-blue-400 px-4 py-1 rounded-lg" onClick={() => setScreenSize(125)}>125%</div>
              <div className="hover:bg-blue-400 px-4 py-1 rounded-lg" onClick={() => setScreenSize(150)}>150%</div>
              <div className="hover:bg-blue-400 px-4 py-1 rounded-lg" onClick={() => setScreenSize(175)}>175%</div>
              <div className="hover:bg-blue-400 px-4 py-1 rounded-lg" onClick={() => setScreenSize(200)}>200%</div>
              <div className="hover:bg-blue-400 px-4 py-1 rounded-lg" onClick={() => setScreenSize(250)}>250%</div>
            </div>
          </div>
          <input type="range" min="25" max="250" className="w-32 cursor-pointer accent-blue-600"
            value={screenSize}
            onChange={(e) => setScreenSize(Number(e.target.value))} />
        </div>
      </div>

    </div>
  );
};

export default Workshop;
