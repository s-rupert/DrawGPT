import { createLucideIcon } from 'lucide-react';

const ShapesIcon = createLucideIcon("Shapes", [
  // Triangle
  ["path", { d: "M5 19l4-8 4 8z", key: "triangle" }],
  // Rectangle
  ["rect", { x: "14", y: "4", width: "6", height: "6", key: "rectangle" }],
  // Circle
  ["circle", { cx: "6", cy: "6", r: "3", key: "circle" }],
]);

export default ShapesIcon;
