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
import Pencil from "../Icons/Pencil";
import Pencil1 from "../Icons/Pencil1";
import Pencil2 from "../Icons/Pencil2";
import Pencil3 from "../Icons/Pencil3";
import Pencil4 from "../Icons/Pencil4";
import Pencil5 from "../Icons/Pencil5";
import Pencil6 from "../Icons/Pencil6";
import BorderSize from "../Icons/BorderSize";
import OpFileComponent from "../FileComponent/OpFileComponent";
import OpEditComponent from "../EditComponent/OpEditComponent";
import OpViewComponent from "../ViewComponent/OpViewComponent";
import CanvasDraw from "../Components/CanvasDraw";

import Shapes from "../Icons/Shapes";
import { PageContext } from "../Components/PageContext";

const Workshop = () => {
  const [uiInterface, setUiInterface] = useState(true);
  const { FuncOption } = useContext(PageContext)
  return (
    <div className="relative w-full h-full" onClick={()=>FuncOption()}>
      <div className="flex justify-between bg-gray-500 text-white h-8">
        <div className="flex flex-row h-8 text-white items-center">
          <OpFileComponent />
          <OpEditComponent />
          <OpViewComponent />
          <Save
            size={30}
            className="hover:text-black hover:bg-gray-400 py-1 px-1 ml-3"
          />
          <Share
            size={30}
            className="hover:text-black hover:bg-gray-400 py-1 px-1 ml-3"
          />
          <Redo2
            size={30}
            className="hover:text-black hover:bg-gray-400 py-1 px-1 ml-3"
          />
          <Undo2
            size={30}
            className="hover:text-black hover:bg-gray-400 py-1 px-1 ml-3"
          />
        </div>
        <div className="flex flex-row h-8 text-white">
          <div onClick={() => setUiInterface(!uiInterface)}>
            <ChevronDown
              size={30}
              className={`hover:text-black hover:bg-gray-400 py-1 px-1 ml-3 ${uiInterface ? "" : "hidden"
                }`}
            />
            <ChevronUp
              size={30}
              className={`hover:text-black hover:bg-gray-400 py-1 px-1 ml-3 ${uiInterface ? "hidden" : ""
                }`}
            />
          </div>
          <div className="hover:text-black hover:bg-gray-400 py-1 px-3">
            Transparent
          </div>
          <UserRound
            size={30}
            className="hover:text-black hover:bg-gray-400 py-1 px-1 ml-3"
          />
          <Settings
            size={30}
            className="hover:text-black hover:bg-gray-400 py-1 px-1 ml-3"
          />
        </div>
      </div>
      <div
        className={`bg-gray-500 flex gap-[1px] ${uiInterface ? "block" : "hidden"
          }`}
      >
        <div className="flex-1 bg-gray-300 py-1">
          <div className="flex justify-center items-center h-full">
            <div className="h-full text-center flex flex-col items-center justify-center">
              <SquareDashedMousePointer size={20} />
              <div className="text-sm">Selection</div>
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
              <div className="text-sm">Image</div>
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
              <div className="text-sm">Shapes</div>
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
              <div className="text-sm">Tools</div>
            </div>
            <div className="h-full text-center flex items-center justify-center hover:text-white">
              <ChevronDown size={20} />
            </div>
          </div>
        </div>
        <div className="flex-1 bg-gray-300 py-1">
          <div className="flex justify-center items-center h-full">
            <div className="h-full text-center flex flex-col items-center justify-center">
              <Eraser size={20} />
              <div className="text-sm">Eraser</div>
            </div>
            <div className="h-full text-center flex items-center justify-center hover:text-white">
              <ChevronDown size={20} />
            </div>
          </div>
        </div>
        <div className="flex-2 bg-gray-300 p-1">
          <div className="flex items-center justify-center h-full">
            <div className="text-sm transform rotate-[-90deg]">Pencils</div>
            <div className="flex pb-1 gap-[0.5vw]">
              <Pencil size={30} />
              <Pencil1 size={30} />
              <Pencil2 size={30} />
              <Pencil3 size={30} />
              <Pencil4 size={30} />
              <Pencil5 size={30} className="text-yellow-500" />
              <Pencil6 size={30} className="text-red-600" />
            </div>
          </div>
        </div>
        <div className="flex-2 bg-gray-300 p-1">
          <div className="flex justify-center items-center h-full gap-[1vw]">
            <div className="text-sm transform rotate-[-90deg]">Colors</div>
            <div className="flex items-center justify-center">
              <div>
                <div className="flex gap-1 py-1">
                  <div className="w-5 h-5 rounded-full bg-gray-200"></div>
                  <div className="w-5 h-5 rounded-full bg-lime-500"></div>
                  <div className="w-5 h-5 rounded-full bg-yellow-500"></div>
                  <div className="w-5 h-5 rounded-full bg-teal-500"></div>
                  <div className="w-5 h-5 rounded-full bg-cyan-500"></div>
                  <div className="w-5 h-5 rounded-full bg-green-500"></div>
                  <div className="w-5 h-5 rounded-full bg-orange-500"></div>
                </div>
                <div className="flex gap-1 py-1">
                  <div className="w-5 h-5 rounded-full bg-blue-500"></div>
                  <div className="w-5 h-5 rounded-full bg-rose-500"></div>
                  <div className="w-5 h-5 rounded-full bg-pink-500"></div>
                  <div className="w-5 h-5 rounded-full bg-indigo-500"></div>
                  <div className="w-5 h-5 rounded-full bg-purple-500"></div>
                  <div className="w-5 h-5 rounded-full bg-slate-500"></div>
                  <div className="w-5 h-5 rounded-full bg-black"></div>
                </div>
              </div>

            </div>
            <div className="flex-col justify-center items-center text-center">
              <input
                type="color"
                onChange={(e) => setColor(e.target.value)}
                className="w-10 h-10 cursor-pointer"
              />
              <p className="text-xs -mt-1">Select</p>
            </div>
            <BorderSize size="30" />
          </div>
        </div>
        <div className="flex-1 bg-gray-300 py-1">
          <div className="flex items-center justify-center h-full">
            <div className="flex flex-col items-center justify-center">
              <Smile size={20} />
              <div className="text-sm">Emoji</div>
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
              <div className="text-sm">Ruler</div>
            </div>
            <div className="ml-1 hover:text-white">
              <ChevronDown size={20} />
            </div>
          </div>
        </div>
      </div>
        <CanvasDraw className="bg-black"/>
    </div>
  );
};

export default Workshop;
