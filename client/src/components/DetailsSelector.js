import React, { useState } from "react";
import "../css/DetailsSelector.css";
import Dropdown from "./DropDown";
const options = [
  {
    label: "red",
    value: "red",
  },
  {
    label: "Blue",
    value: "blue",
  },
  {
    label: "Yellow",
    value: "yellow",
  },
];

function DetailsSelector() {
  const [selectedOption, setSelectedOption] = useState(options[0]);
  return (
    <div className="details__selector">
      <h4>Label</h4>
      <Dropdown
        selected={selectedOption}
        onSelectedChange={setSelectedOption}
        options={options}
      />
    </div>
  );
}

export default DetailsSelector;
