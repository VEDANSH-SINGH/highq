import React from "react";
import Dropdown from "./DropDown";
import "../css/SubHeader.css";
function SubHeader() {
  return (
    <div className="subheader">
      <div className="subheader-left">
        <div className="subheader-dropdown">Dropdown</div>

        <div>
          <span className="subheader-dropdown subheader-item">Home</span>
        </div>
        <div>
          <span className="subheader-dropdown">Services</span>
        </div>
        <div>
          <span className="subheader-dropdown subheader-item">About Us</span>
        </div>
      </div>
      <div className="subheader-right">
        <div>
          <span className="subheader-dropdown subheader-item">Link1</span>
        </div>
        <div>
          <span className="subheader-dropdown subheader-item">Link2</span>
        </div>
        <div>
          <span className="subheader-dropdown subheader-item">Link3</span>
        </div>
        <div>
          <span className="subheader-dropdown subheader-item">Link4</span>
        </div>
      </div>
    </div>
  );
}

export default SubHeader;
