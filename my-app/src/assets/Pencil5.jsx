import * as React from "react";

const Pencil5 = React.forwardRef(({ color = "currentColor", size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill={color}
    {...props}
  >
    <polygon points="12.5 0.5 3 10 3.59 10.59 1.64 12.54 2.14 13.04 0.17 15 2 15 3.05 13.95 3.55 14.45 5.5 12.5 6 13 15.5 3.5 12.5 0.5"/>
</svg>
));

Pencil5.displayName = "Pencil5";
export default Pencil5;
