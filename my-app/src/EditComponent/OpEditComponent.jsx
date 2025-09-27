import React, { useContext, useState } from "react";
import {
    Scissors,
    Files,
    Clipboard,
    Undo,
    Redo
} from 'lucide-react';
import { PageContext } from "../Components/PageContext";

function OpFileComponent() {
    const { OpEdit, setOpEdit, undo, redo,
        history,
        redoStack } = useContext(PageContext);
    return (
        <div>
            <div className="hover:text-black hover:bg-gray-400 py-1 px-3 rounded-md"
                onClick={() => setOpEdit(!OpEdit)}>
                Edit
            </div>
            <div className={`absolute text-black w-60 rounded-lg bg-gray-200 p-1 ml-2 z-11 ${OpEdit ? "" : "hidden"}`}>
                <div className="flex justify-between items-center hover:bg-gray-100 px-2 py-1 rounded-sm">
                    <div className="flex text-sm gap-1">
                        <Scissors size={18} />
                        Cut
                    </div>
                    <div className="text-sm">
                        Ctrl+X
                    </div>
                </div>
                <div className="flex justify-between items-center hover:bg-gray-100 px-2 py-1 rounded-sm">
                    <div className="flex text-sm gap-1">
                        <Files size={18} />
                        Copy
                    </div>
                    <div className="text-sm">
                        Ctrl+C
                    </div>
                </div>
                <div className="flex justify-between items-center hover:bg-gray-100 px-2 py-1 rounded-sm">
                    <div className="flex text-sm gap-1">
                        <Clipboard size={18} />
                        Paste
                    </div>
                    <div className="text-sm">
                        Ctrl+P
                    </div>
                </div>
                <div className={`flex justify-between items-center hover:bg-gray-100 px-2 py-1 rounded-sm ${history.length === 0 ? "opacity-50" : ""}`} onClick={undo}>
                    <div className="flex text-sm gap-1">
                        <Undo size={18} />
                        Undo
                    </div>
                    <div className="text-sm">
                        Ctrl+Z
                    </div>
                </div>
                <div className={`flex justify-between items-center hover:bg-gray-100 px-2 py-1 rounded-sm ${redoStack.length === 0 ? "opacity-50" : ""}`} onClick={redo}>
                    <div className="flex text-sm gap-1">
                        <Redo size={18} />
                        Redo
                    </div>
                    <div className="text-sm">
                        Ctrl+Shift+Z
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OpFileComponent;