import React, { useState } from "react";
import Label from "../Label";
import Icon from "../Icon";
import { NOOP } from "../../constants/eventHandlerConstants";

function AddMinusButton({ value, noNegative, onChange }) {
  const [actualValue, setValue] = useState(value);

  const onClick = val => {
    val = !noNegative || (noNegative && val >= 0) ? val : 0;
    setValue(val);
    onChange(val);
  };
  return (
    <div className="add-minus-btn-wrp flex-row">
      <div className="value-wrp flex-center">
        <Label size={18}>{actualValue}</Label>
      </div>
      <div className="add-minus-wrp flex-col">
        <Label onClick={() => onClick(actualValue + 1)} className="plus-wrp">
          <Icon name="fa-plus" size={12} />
        </Label>
        <Label onClick={() => onClick(actualValue - 1)} className="minus-wrp">
          <Icon name="fa-minus" size={12} />
        </Label>
      </div>
    </div>
  );
}

AddMinusButton.defaultProps = {
  value: 0,
  onChange: NOOP,
  noNegative: true
};

export default AddMinusButton;
