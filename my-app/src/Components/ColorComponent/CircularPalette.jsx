import React, { useEffect, useRef } from "react";
import iro from "@jaames/iro";

export default function CircularPalette({ color, setColor }) {
  const ref = useRef(null);

  useEffect(() => {
    const picker = new iro.ColorPicker(ref.current, {
      width: 180,
      color: color,
      layout: [
        { component: iro.ui.Wheel },
        { component: iro.ui.Slider, options: { sliderType: 'value' } },
      ],
    });

    picker.on("color:change", (c) => setColor(c.hexString));
  }, [color, setColor]);

  return <div ref={ref}></div>;
}
