import React from "react";
import { NOOP } from "../../constants/eventHandlerConstants";
import Label from "../Label";

function Button({ className, type, onClick, children, styles, ...rest }) {
  return (
    <button {...rest} className={`${className} btn btn-${type}`} onClick={onClick} style={{...styles}}>
      {children}
    </button>
  );
}

Button.defaultProps = {
    className: "",
    onClick: NOOP,
    type: 'primary',
    styles: {},
    children: <Label styles={{ fontSize: 14 }}>Click</Label>
};

export default Button;
