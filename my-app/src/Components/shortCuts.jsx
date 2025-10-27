import React, { useEffect, useContext } from "react";
import { PageContext } from "./PageContext";

function ShortCuts() {
    const { undo, redo, uiInterface, setUiInterface, setScreenSize } = useContext(PageContext);

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


    const handleKeyPress = (event) => {
        if (event.shiftKey && event.key.toLowerCase() === 'r') {
            console.log('Shift + R was pressed!');
            ribbonHandler();
        }
    };

    const ribbonHandler = () => {
        setUiInterface((prev) => !prev);
    };

    useEffect(() => {
        window.addEventListener('keydown', handleKeyPress);

        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, []);

    useEffect(() => {
        const handleWheel = (e) => {
            if (e.ctrlKey) {
                e.preventDefault();
                setScreenSize((prev) => {
                    let newSize = prev + (e.deltaY < 0 ? 5 : -5);
                    newSize = Math.min(Math.max(newSize, 25), 250);
                    return newSize;
                });
            }
        };

        window.addEventListener("wheel", handleWheel, { passive: false });
        return () => window.removeEventListener("wheel", handleWheel);
    }, []);

    return null;
}

export default ShortCuts;