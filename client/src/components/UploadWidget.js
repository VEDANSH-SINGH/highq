import React, { useState } from "react";
import ProductHome from "./ProductHome.js";
import "../css/UploadWidget.css";

function UploadWidget(props) {
  const [renderedForm, setrenderedForm] = useState({
    count: [1],
  });
  let t = renderedForm.count.map((i) => {
    return <ProductHome handleClick={props.handleClicK} />;
  });
  function handleAddition() {
    console.log("handleAddition was called");
    setrenderedForm({
      count: [...renderedForm.count, 1],
    });
  }

  return (
    <div className="UploadWidget">
      {t}
      <div className="button__container">
        {" "}
        <button
          type="button"
          className="make-button-link"
          data-add-button=""
          href="#"
          onClick={handleAddition}
        >
          +
        </button>
        <button type="button" className=" proceed" data-add-button="" href="#">
          Proceed
        </button>
      </div>
    </div>
  );
}
export default UploadWidget;
