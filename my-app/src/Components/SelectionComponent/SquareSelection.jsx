import React, { useState, useEffect, useContext } from "react";
import { PageContext } from "../PageContext";

function SquareSelection() {
  const { canvasRef } = useContext(PageContext);
  const [ctx, setCtx] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startPos, setStartPos] = useState(null);
  const [currentPos, setCurrentPos] = useState(null);

  useEffect(() => {
    if (canvasRef?.current) {
      setCtx(canvasRef.current.getContext("2d"));
    }
  }, [canvasRef]);

  useEffect(() => {
    if (!ctx || !canvasRef?.current) return;

    const canvas = canvasRef.current;

    const handleMouseDown = (e) => {
      const rect = canvas.getBoundingClientRect();
      setStartPos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
      setIsDragging(true);
    };

    const handleMouseMove = (e) => {
      if (!isDragging) return;
      const rect = canvas.getBoundingClientRect();
      setCurrentPos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    canvas.addEventListener("mousedown", handleMouseDown);
    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseup", handleMouseUp);

    return () => {
      canvas.removeEventListener("mousedown", handleMouseDown);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseup", handleMouseUp);
    };
  }, [ctx, isDragging, canvasRef]);

  // Draw selection effect
  useEffect(() => {
    if (!ctx || !startPos || !currentPos || !isDragging) return;

    // Clear only overlay part (optional: you might want a separate overlay canvas for clean redraws)
    ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);

    const x = startPos.x;
    const y = startPos.y;
    const w = currentPos.x - startPos.x;
    const h = currentPos.y - startPos.y;

    ctx.setLineDash([6]); // dashed line
    ctx.strokeStyle = "black";
    ctx.strokeRect(x, y, w, h);
    ctx.setLineDash([]); // reset
  }, [ctx, currentPos, isDragging, startPos, canvasRef]);

  return null;
}

export default SquareSelection;
