import * as React from "react";

const BorderSize = React.forwardRef(({ color = "currentColor", size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill={color}
    {...props}
  >
   
   <path stroke="null" d="m0,0.7469a0.5,0.62187 0 0 1 0.5,-0.62187l15,0a0.5,0.62187 0 0 1 0.5,0.62187l0,2.4875a0.5,0.62187 0 0 1 -0.5,0.62187l-15,0a0.5,0.62187 0 0 1 -0.5,-0.62187l0,-2.4875zm0,6.21874a0.5,0.62187 0 0 1 0.5,-0.62187l15,0a0.5,0.62187 0 0 1 0.5,0.62187l0,1.24375a0.5,0.62187 0 0 1 -0.5,0.62187l-15,0a0.5,0.62187 0 0 1 -0.5,-0.62187l0,-1.24375zm0,4.97499a0.5,0.62187 0 0 1 0.5,-0.62187l15,0a0.5,0.62187 0 0 1 0,1.24375l-15,0a0.5,0.62187 0 0 1 -0.5,-0.62187z" id="svg_1"/>
  <line stroke="null" fill="none" id="svg_3" y2="12.78121" x2="15.84369" y1="12.40622" x1="0.15631"/>
  <rect stroke="null" rx="0.5" id="svg_7" height="0.6875" width="15.87488" y="14.4687" x="0.06256" fill="#000000"/>
</svg>
));

BorderSize.displayName = "BorderSize";
export default BorderSize;
