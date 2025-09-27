import React, { useContext, useState } from "react";
import {
    FilePlus,
    Folder,
    ChevronRight,
    Clock,
    Save,
    SaveAll,
    Printer,
    ExternalLink,
    LogOut

} from 'lucide-react';
import { PageContext } from "../Components/PageContext";

function OpFileComponent() {
    const {OpFile, setOpFile} = useContext(PageContext);
    return (
        <div>
            <div className="hover:text-black hover:bg-gray-400 py-1 px-3 rounded-md"
                onClick={() => setOpFile(!OpFile)}>
                File
            </div>
            <div className={`absolute text-black w-60 rounded-lg bg-gray-200 p-1 ml-2 z-11 ${OpFile ? "" : "hidden"}`}>
                <div className="flex justify-between items-center hover:bg-gray-100 px-2 py-1 rounded-sm">
                    <div className="flex text-sm gap-1">
                        <FilePlus size={18} />
                        New
                    </div>
                    <div className="text-sm">
                        Ctrl+N
                    </div>
                </div>
                <div className="flex justify-between items-center hover:bg-gray-100 px-2 py-1 rounded-sm">
                    <div className="flex text-sm gap-1">
                        <Folder size={18} />
                        Open
                    </div>
                    <div className="text-sm">
                        Ctrl+O
                    </div>
                </div>
                <div className="flex justify-between items-center hover:bg-gray-100 px-2 py-1 rounded-sm">
                    <div className="flex text-sm gap-1">
                        <Clock size={18} />
                        Recent
                    </div>
                    <ChevronRight size={18} />
                </div>
                <div className="flex justify-between items-center hover:bg-gray-100 px-2 py-1 rounded-sm">
                    <div className="flex text-sm gap-1">
                        <Save size={18} />
                        Save
                    </div>
                    <ChevronRight size={18} />
                </div>
                <div className="flex justify-between items-center hover:bg-gray-100 px-2 py-1 rounded-sm">
                    <div className="flex text-sm gap-1">
                        <SaveAll size={18} />
                        Save As
                    </div>
                    <ChevronRight size={18} />
                </div>
                <div className="flex text-sm gap-1 items-center hover:bg-gray-100 px-2 py-1 rounded-sm">
                    <Printer size={18} />
                    Print
                </div>
                <div className="flex text-sm gap-1 items-center hover:bg-gray-100 px-2 py-1 rounded-sm">
                    <ExternalLink size={18} />
                    Share
                </div>
                <div className="flex text-sm gap-1 items-center hover:bg-gray-100 px-2 py-1 rounded-sm">
                   <LogOut size={18} />
                    Exit
                </div>
            </div>
        </div>
    )
}

export default OpFileComponent;