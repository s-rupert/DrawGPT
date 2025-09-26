import { createContext, useState, useRef, useEffect } from "react";

export const PageContext = createContext();

export const PageProvider = ({ children }) => {
  const [OpFile, setOpFile] = useState(false);
  const [OpEdit, setOpEdit] = useState(false);
  const [OpView, setOpView] = useState(false);
  const [brushSizeOp, setBrushSizeOp] = useState(false);
  const [screenTransparancy, setScreenTransparancy] = useState(false);

  // Draw Controls
  const [color, setColor] = useState("#000000");
  const [brushSize, setBrushSize] = useState(5);
  const [drawMode, setDrawMode] = useState(true);
  const [history, setHistory] = useState([]);
  const [redoStack, setRedoStack] = useState([]);
  const [undoFn, setUndoFn] = useState(() => () => {});
  const [redoFn, setRedoFn] = useState(() => () => {});

  useEffect(() => {
    setDrawMode(true);
  }, [color]);

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
        undoFn,
        setUndoFn,
        redoFn,
        setRedoFn,
      }}
    >
      {children}
    </PageContext.Provider>
  );
};
