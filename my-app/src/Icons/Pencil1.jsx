import * as React from "react";

const Pencil1 = React.forwardRef(({ color = "currentColor", size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 537.938 537.939"
    fill={color}
    {...props}
  >
    <path d="M406.396,0.017L90.744,315.636L0,537.921l222.285-90.705l315.653-315.672L406.396,0.017z M198.307,424.917L58.853,481.5
			l58.632-135.182L400.023,63.89L427.2,90.636L144.403,373.318L198.307,424.917z"/>
  </svg>
));

Pencil1.displayName = "Pencil1";
export default Pencil1;
