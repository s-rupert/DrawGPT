import * as React from "react";

const Pencil2 = React.forwardRef(({ color = "currentColor", size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 512 512"
    fill={color}
    {...props}
  >
    <path d="m453.7,133l-286,289.6-71.6-75 284.8-288.4c9-9.1 24.8-9 33.7,0.1l39.2,40.3c9,9.2 8.9,24.2-0.1,33.4zm-375.7,254.4l49.1,51.5-66.9,14.5 17.8-66zm404.8-316.3l-39.2-40.3c-13.3-14.8-54.9-35.8-91.5-0.4l-298.7,302.5c-2.5,2.5-4.3,5.6-5.2,9l-36,133.1c-4.6,17 4.2,27.5 19.6,25.7 1.4-0.2 140.9-30.1 140.9-30.1 3.8-0.8 7.3-2.8 10.1-5.6l299.6-303.4c24.6-24.8 24.8-65.4 0.4-90.5z"/>
  </svg>
));

Pencil2.displayName = "Pencil2";
export default Pencil2;
