import React from "react";

const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
  <a
    href="a"
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  >
    {children}
    &#x25bc;
  </a>
));

export default CustomToggle;
