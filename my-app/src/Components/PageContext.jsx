import { createContext, useState, useRef, useEffect } from "react";

export const PageContext = createContext();

export const PageProvider = ({ children }) => {
  const [OpFile, setOpFile] = useState(false);
  const [OpEdit, setOpEdit] = useState(false);
  const [OpView, setOpView] = useState(false);
  const [brushSizeOp, setBrushSizeOp] = useState(false);
  const [screenTransparancy, setScreenTransparancy] = useState(false);

  // Draw Controls
  const canvasRef = useRef(null);
  const [color, setColor] = useState("#000000");
  const [brushSize, setBrushSize] = useState(5);
  const [drawMode, setDrawMode] = useState(true);
  const [history, setHistory] = useState([]);
  const [redoStack, setRedoStack] = useState([]);

  useEffect(() => {
    setDrawMode(true);
  }, [color]);

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

  const FuncOption = () => {
    if (OpFile) {
      setOpFile(false);
    } else if (OpEdit) {
      setOpEdit(false);
    } else if (OpView) {
      setOpView(false);
    } else if (brushSizeOp) {
      setBrushSizeOp(false);
    }
  };

  return (
    <PageContext.Provider
      value={{
        OpFile,
        setOpFile,
        OpEdit,
        setOpEdit,
        OpView,
        setOpView,
        FuncOption,
        brushSizeOp,
        setBrushSizeOp,
        screenTransparancy,
        setScreenTransparancy,
        // Draw Controls
        color,
        setColor,
        brushSize,
        setBrushSize,
        drawMode,
        setDrawMode,
        history,
        setHistory,
        redoStack,
        setRedoStack,
        canvasRef,
        undo,
        redo
      }}
    >
      {children}
    </PageContext.Provider>
  );
};
