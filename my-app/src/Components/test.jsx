import React, { useRef, useEffect, useState, useContext } from "react";
import { PageContext } from "./PageContext";

const CanvasDraw = () => {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [ctx, setCtx] = useState(null);
  const { color, brushSize, drawMode, setDrawMode, screenTransparancy, setScreenTransparancy } = useContext(PageContext);
  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const [history, setHistory] = useState([]);
  const [redoStack, setRedoStack] = useState([]);

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    
    if (!ctx) {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      setCtx(context);
    }
    
    if (ctx) {
      canvas.style.backgroundColor = screenTransparancy ? "transparent" : "white";
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

  const undo = () => {
    if (history.length === 0) return;

    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    const previousState = history[history.length - 1];
    setRedoStack((prev) => [...prev, canvas.toDataURL()]);
    setHistory((prev) => prev.slice(0, -1));

    const img = new Image();
    img.src = previousState;
    img.onload = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(img, 0, 0);
    };
  };

  const redo = () => {
    if (redoStack.length === 0) return;

    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    const nextState = redoStack[redoStack.length - 1];
    setHistory((prev) => [...prev, canvas.toDataURL()]);
    setRedoStack((prev) => prev.slice(0, -1));

    const img = new Image();
    img.src = nextState;
    img.onload = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(img, 0, 0);
    };
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
    <div>
      <div style={{ marginBottom: "10px" }}>
        <button onClick={undo} disabled={history.length === 0}>
          Undo
        </button>
        <button onClick={redo} disabled={redoStack.length === 0}>
          Redo
        </button>
      </div>
      <canvas
        ref={canvasRef}
        onMouseDown={startDrawing}
        onMouseMove={draw}
        onMouseUp={endDrawing}
        onMouseLeave={endDrawing}
        style={{ border: "0.5px solid #272424ff", cursor: "crosshair" }}
      />
    </div>
  );
};

export default CanvasDraw;