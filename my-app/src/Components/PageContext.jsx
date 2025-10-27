import { createContext, useState, useRef, useEffect } from "react";

export const PageContext = createContext();

export const PageProvider = ({ children }) => {
  // UI States
  const [uiInterface, setUiInterface] = useState(true);
  const [statusInterface, setStatusInterface] = useState(true);
  const [OpFile, setOpFile] = useState(false);
  const [OpEdit, setOpEdit] = useState(false);
  const [OpView, setOpView] = useState(false);
  const [brushSizeOp, setBrushSizeOp] = useState(false);
  const [screenTransparancy, setScreenTransparancy] = useState(false);
  const [sizeOptionIsOpen, setSizeOptionIsOpen] = useState(false);
  const [screenSize, setScreenSize] = useState(100);
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth * (screenSize / 100),
    height: window.innerHeight * (screenSize / 100),
  });

  useEffect(() => {
    const updateSize = () => {
      setWindowSize({
        width: window.innerWidth * (screenSize / 100),
        height: window.innerHeight * (screenSize / 100),
      });
    };

    window.addEventListener('resize', updateSize);
    updateSize();

    return () => window.removeEventListener('resize', updateSize);
  }, [screenSize]);

  // Draw Modes
  const [actionMode, setActionMode] = useState("draw");


  // Draw Controls
  const canvasRef = useRef(null);
  const actionsRef = useRef([]);
  const [color, setColor] = useState("#000000");
  const [brushSize, setBrushSize] = useState(5);
  const [history, setHistory] = useState([]);
  const [redoStack, setRedoStack] = useState([]);

  const handleAction = (context, action) => {
    const { mode, payload } = action;

    if (!payload?.lines || payload.lines.length === 0) return;

    context.beginPath();
    context.globalCompositeOperation =
      mode === "erase" ? "destination-out" : "source-over";

    context.lineWidth = payload.width || 3;
    context.strokeStyle = payload.color || "#000";

    payload.lines.forEach((point, index) => {
      if (index === 0) context.moveTo(point.x, point.y);
      else context.lineTo(point.x, point.y);
    });

    context.stroke();
    context.closePath();
  };

  const redrawCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!canvas || !ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    actionsRef.current.forEach((action) => {
      handleAction(ctx, action);
    });
  };

  const undo = () => {
    if (actionsRef.current.length === 0) return;

    const lastAction = actionsRef.current.pop();
    setRedoStack((prev) => [...prev, lastAction]);
    redrawCanvas();
  };

  const redo = () => {
    if (redoStack.length === 0) return;

    const actionToRedo = redoStack[redoStack.length - 1];
    setRedoStack((prev) => prev.slice(0, -1));

    actionsRef.current.push(actionToRedo);
    redrawCanvas();
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
    } else if (sizeOptionIsOpen) {
      setSizeOptionIsOpen(false);
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
        sizeOptionIsOpen,
        setSizeOptionIsOpen,
        uiInterface,
        setUiInterface,
        statusInterface,
        setStatusInterface,
        windowSize,
        setWindowSize,
        screenSize,
        setScreenSize,
        actionsRef,
        redrawCanvas,
        // Draw Controls
        color,
        setColor,
        brushSize,
        setBrushSize,
        actionMode,
        setActionMode,
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
