import React, { useRef, useEffect, useState, useContext, use } from "react";
import { PageContext } from "./PageContext";

const CanvasDraw = () => {
  const [isDrawing, setIsDrawing] = useState(false);
  const [ctx, setCtx] = useState(null);
  const [currentLine, setCurrentLine] = useState([]);
  const {
    color,
    brushConSize,
    actionMode,
    screenTransparancy,
    windowSize,
    canvasRef,
    actionsRef,
    redrawCanvas
  } = useContext(PageContext);
  const [brushSize, setBrushSize] = useState(brushConSize/1000)

  useEffect(() => {
    setBrushSize(brushConSize/1000)
  },[brushConSize])


  // 🔹 Initialize and update canvas context
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d", { willReadFrequently: true });

    if (!ctx) {
      canvas.width = windowSize.width;
      canvas.height = windowSize.height;
    }

    if (context) {
      canvas.style.backgroundColor = screenTransparancy
        ? "transparent"
        : "white";

      context.lineCap = "round";
      context.lineWidth = brushSize*canvas.height;
      context.strokeStyle = color;
    }
    setCtx(context);
  }, [color, brushSize, ctx, screenTransparancy]);

  // resize canvas when windowSize changes
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.width = windowSize.width;
    canvas.height = windowSize.height;
    const context = canvas.getContext("2d", { willReadFrequently: true });

    context.lineCap = "round";
    context.lineWidth = brushSize*canvas.height;
    context.strokeStyle = color;
    canvas.style.backgroundColor = screenTransparancy ? "transparent" : "white";

    setCtx(context);
    redrawCanvas();

  }, [windowSize]);


  const startDrawing = (e) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    if (!ctx) return;
    const x = e.nativeEvent.offsetX;
    const y = e.nativeEvent.offsetY;
    const cx = (x / canvas.width);
    const cy = (y / canvas.height)
    ctx.beginPath();
    ctx.moveTo(x, y);
    setIsDrawing(true);
    setCurrentLine([{ cx, cy }]);
  };

  // 🔹 Draw or erase while moving
  const draw = (e) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    if (!isDrawing || !ctx) return;

    const x = e.nativeEvent.offsetX;
    const y = e.nativeEvent.offsetY;
    const cx = (x / canvas.width);
    const cy = (y / canvas.height)
    ctx.globalCompositeOperation =
      actionMode === "erase" ? "destination-out" : "source-over";

    ctx.lineTo(x, y);
    ctx.stroke();

    // Save points to the current line
    setCurrentLine((prev) => [...prev, { cx, cy }]);
  };

  // 🔹 End drawing
  const endDrawing = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    if (!ctx || !isDrawing) return;

    ctx.closePath();
    setIsDrawing(false);

    if (currentLine.length > 0) {
      // Create payload based on mode
      const payload =
        actionMode === "erase"
          ? {
            lines: currentLine,
            width: brushSize,
          }
          : {
            lines: currentLine,
            color: color,
            width: brushSize,
            tool: "pen",
          };

      // Push action into actionsRef
      actionsRef.current.push({
        mode: actionMode,
        payload,
      });
    }
    console.log(actionsRef.current);
    // Clear the current line
    setCurrentLine([]);
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
