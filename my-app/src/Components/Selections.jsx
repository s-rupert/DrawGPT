import React, { useState } from "react";
import { SquareDashedMousePointer, ChevronDown, CircleDashed, Spline, ChevronRight, SquaresExclude, Trash, LayoutGrid } from 'lucide-react';

const Selections = () => {
    const [SquareSelect, setSquareSelect] = useState(false);
    const [CircleSelect, setCircleSelect] = useState(false);
    const [FreeFormSelect, setFreeFormSelect] = useState(false);
    const [CurrentSelection, setCurrentSelection] = useState("Square");
    const [optionIsOpen, setOptionIsOpen] = useState(false);

    const selectHandler = (type) => {
        if (type === "Square") {
            setSquareSelect(true);
            setCircleSelect(false);
            setFreeFormSelect(false);
        } else if (type === "Circle") {
            setSquareSelect(false);
            setCircleSelect(true);
            setFreeFormSelect(false);
        } else if (type === "FreeForm") {
            setSquareSelect(false);
            setCircleSelect(false);
            setFreeFormSelect(true);
        }
    };
    return (
        <div className="flex justify-center items-center h-full">
            <div className="h-full text-center flex flex-col items-center justify-center">
                <SquareDashedMousePointer size={30} className={`p-1 ${!SquareSelect
                        ? "hover:p-[2px]"
                        : "p-0 border-1 border-gray-500 rounded-lg"
                    } ${CurrentSelection === "Square" ? "" : "hidden"}`} onClick={() => { setSquareSelect(!SquareSelect);}} />
                <CircleDashed size={30} className={`p-1 ${!CircleSelect
                        ? "hover:p-[2px]"
                        : "p-0 border-1 border-gray-500 rounded-lg"
                    } ${CurrentSelection === "Circle" ? "" : "hidden"}`} onClick={() => { setCircleSelect(!CircleSelect);}} />
                <Spline size={30} className={`p-1 ${!FreeFormSelect
                        ? "hover:p-[2px]"
                        : "p-0 border-1 border-gray-500 rounded-lg"
                    } ${CurrentSelection === "FreeForm" ? "" : "hidden"}`} onClick={() => { setFreeFormSelect(!FreeFormSelect);}} />
                <div className="text-sm font-semibold">Selection</div>
            </div>
            <div className="h-full text-center flex items-center justify-center hover:text-white relative z-10" onMouseEnter={() => setOptionIsOpen(true)} onMouseLeave={() => setOptionIsOpen(false)}>
                <ChevronDown size={20} />
                <div className={`absolute top-13 -left-10 w-60 text-black rounded-lg bg-gray-200 flex flex-col p-1 shadow-lg z-11 ${optionIsOpen ? 'block' : 'hidden'}`}>
                    <div className="flex items-center justify-between p-1 hover:bg-gray-100 rounded-md" onClick={() => { setCurrentSelection("Square"); setOptionIsOpen(false); selectHandler("Square") }}>
                        <div className="flex items-center">
                            <SquareDashedMousePointer size={16} className="mr-2" />
                            <span className="text-sm">Square</span>
                        </div>
                        <div className="text-xs">Ctrl+Shift+S</div>
                    </div>
                    <div className="flex items-center justify-between p-1 hover:bg-gray-100 rounded-md" onClick={() => { setCurrentSelection("Circle"); setOptionIsOpen(false); selectHandler("Circle") }}>
                        <div className="flex items-center">
                            <CircleDashed size={16} className="mr-2" />
                            <span className="text-sm">Circle</span>
                        </div>
                        <div className="text-xs">Ctrl+Shift+C</div>
                    </div>
                    <div className="flex items-center justify-between p-1 hover:bg-gray-100 rounded-md" onClick={() => { setCurrentSelection("FreeForm"); setOptionIsOpen(false); selectHandler("FreeForm") }}>
                        <div className="flex items-center">
                            <Spline size={16} className="mr-2" />
                            <span className="text-sm">Free-form</span>
                        </div>
                        <div className="text-xs">Ctrl+Shift+F</div>
                    </div>
                    <div className="flex items-center justify-between p-1 hover:bg-gray-100 rounded-md opacity-50">
                        <div className="flex items-center">
                            <LayoutGrid size={16} className="mr-2" />
                            <span className="text-sm">Select All</span>
                        </div>
                        <div className="text-xs">Ctrl+A</div>
                    </div>
                    <div className="flex items-center justify-between p-1 hover:bg-gray-100 rounded-md opacity-50">
                        <div className="flex items-center">
                            <SquaresExclude size={16} className="mr-2" />
                            <span className="text-sm">Invert</span>
                        </div>
                        <div className="text-xs">Ctrl+I</div>
                    </div>
                    <div className="flex items-center justify-between p-1 hover:bg-gray-100 rounded-md opacity-50">
                        <div className="flex items-center">
                            <Trash size={16} className="mr-2" />
                            <span className="text-sm">Delete</span>
                        </div>
                        <ChevronRight size={16} className="ml-2" />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Selections;
