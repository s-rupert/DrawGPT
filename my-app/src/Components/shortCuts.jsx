import React, { useEffect, useContext } from "react";
import { PageContext } from "./PageContext";

function ShortCuts() {
    const { undo, redo } = React.useContext(PageContext);

    useEffect(() => {
        const handler = (e) => {
            if (e.ctrlKey && e.key.toLowerCase() === "z" && !e.shiftKey) {
                e.preventDefault();
                undo();
            }
            if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === "z") {
                e.preventDefault();
                redo();
            }
        };

        window.addEventListener("keydown", handler);
        return () => window.removeEventListener("keydown", handler);
    }, [undo, redo]);

    return null;
}

export default ShortCuts;