import React from "react";
import Label from "../Label";
import IconButton from "../IconButton";
// import { sunsetGradient, colorConstants } from "../../constants/appConstants";

function AccordionList({ name, desc, tag }) {
  return (
    <li className="flex-justify-sb ac-list-item">
      <div className="title-desc-wrapper">
        <Label as="h5" styles={{ marginBottom: 5 }}>
          {name}
        </Label>
        <Label>{desc}</Label>
      </div>
      <div className="button-label-wrapper flex-center">
        <Label styles={{ margin: "0 15px" }}>{tag}</Label>
        <IconButton
          onClick={() => alert(name)}
          className="accordian-plus-icon"
          iconClass="accordian-icon-primary"
          // buttonColor={sunsetGradient}
          // iconColor={colorConstants.white}
        />
      </div>
    </li>
  );
}

export default AccordionList;
