import React, { useContext } from "react";
import { PageContext } from "../PageContext";
import { Star } from "lucide-react";

export default function StarShape() {
  const { canvasRef } = useContext(PageContext);

  const funCreate = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    const starPath =
      "M50 15 L61 35 L82 35 L66 50 L71 71 L50 60 L29 71 L34 50 L18 35 L39 35 Z";

    const path = new Path2D(starPath);

    ctx.strokeStyle = "black";
    ctx.lineWidth = 2;

    ctx.save();
    ctx.translate(50, 50);
    ctx.scale(2.5, 2.5);
    ctx.stroke(path);
    ctx.restore();
  };

  return (
    <div>
      <Star
        size={18}
        className="text-black cursor-pointer hover:text-gray-600"
        onClick={funCreate}
      />
    </div>
  );
}
