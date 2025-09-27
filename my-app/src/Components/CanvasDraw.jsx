import React, { useRef, useEffect, useState, useContext } from "react";
import { PageContext } from "./PageContext";

const CanvasDraw = () => {
  const [isDrawing, setIsDrawing] = useState(false);
  const [ctx, setCtx] = useState(null);
  const {
    color,
    brushSize,
    drawMode,
    setDrawMode,
    screenTransparancy,
    setScreenTransparancy,
    history,
    setHistory,
    redoStack,
    setRedoStack,
    canvasRef,
    undo,
    redo
  } = useContext(PageContext);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    if (!ctx) {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      setCtx(context);
    }

    if (ctx) {
      canvas.style.backgroundColor = screenTransparancy
        ? "transparent"
        : "white";
      ctx.lineCap = "round";
      ctx.lineWidth = brushSize;
      ctx.strokeStyle = color;
    }
  }, [color, brushSize, ctx, screenTransparancy]);

  const saveState = () => {
    const canvas = canvasRef.current;
    setHistory((prev) => [...prev, canvas.toDataURL()]);
    setRedoStack([]); // Clear redo stack on new action
  };


  const startDrawing = (e) => {
    if (!ctx) return;
    saveState(); // Save state before starting a new drawing
    ctx.beginPath();
    ctx.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    setIsDrawing(true);
  };

  const draw = (e) => {
    if (!isDrawing) return;

    if (drawMode) {
      ctx.globalCompositeOperation = "source-over";
    } else {
      ctx.globalCompositeOperation = "destination-out";
    }

    ctx.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    ctx.stroke();
  };

  const endDrawing = () => {
    if (!ctx) return;
    ctx.closePath();
    setIsDrawing(false);
  };

  return (

    <canvas
      ref={canvasRef}
      onMouseDown={startDrawing}
      onMouseMove={draw}
      onMouseUp={endDrawing}
      onMouseLeave={endDrawing}
      style={{ border: "0.5px solid #272424ff", cursor: "crosshair" }}
    />
  );
};

export default CanvasDraw;
