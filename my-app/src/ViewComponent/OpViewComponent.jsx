import React, { useContext, useState } from "react";
import {
    Ruler,
    Grid3x3,
    ChevronRight

} from 'lucide-react';
import { PageContext } from "../Components/PageContext";

function OpViewComponent() {
    const {OpView, setOpView} = useContext(PageContext);
    return (
        <div>
            <div className="hover:text-black hover:bg-gray-400 py-1 px-3 rounded-md"
                onClick={() => setOpView(!OpView)}>
                View
            </div>
            <div className={`absolute text-black w-60 rounded-lg bg-gray-200 p-1 ml-2 z-11 ${OpView ? "" : "hidden"}`}>
                <div className="flex justify-between items-center hover:bg-gray-100 px-2 py-1 rounded-sm">
                    <div className="flex text-sm gap-1">
                        <Ruler size={18} />
                        Ruler
                    </div>
                    <div className="text-sm">
                        Ctrl+R
                    </div>
                </div>
                <div className="flex justify-between items-center hover:bg-gray-100 px-2 py-1 rounded-sm">
                    <div className="flex text-sm gap-1">
                        <Grid3x3 size={18} />
                        Grid View
                    </div>
                    <div className="text-sm">
                        Ctrl+G
                    </div>
                </div>
                <div className="flex justify-between items-center hover:bg-gray-100 px-2 py-1 rounded-sm">
                    <div className="flex text-sm gap-1">
                        <Grid3x3 size={18} />
                        Status Bar
                    </div>
                    <ChevronRight />
                </div>
            </div>
        </div>
    )
}

export default OpViewComponent;