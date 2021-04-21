import React, { useState, useRef, useEffect } from "react";
const DropDown = ({ options, selected, onSelectedChange }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();
  useEffect(() => {
    const onBodyClick = (e) => {
      if (ref.current.contains(e.target)) {
        return;
      } else {
        setOpen(false);
      }
    };
    document.body.addEventListener("click", onBodyClick);
    return () => {
      document.body.removeEventListener("click", onBodyClick);
    };
  }, []);
  const renderedOption = options.map((option) => {
    if (option.value === selected.value) {
      return null;
    } else {
      return (
        <div
          key={option.value}
          onClick={() => {
            onSelectedChange(option);
          }}
          className="item"
        >
          {option.label}
        </div>
      );
    }
  });
  return (
    <div ref={ref} className="ui form dropdown">
      <div className="field">
        <div
          onClick={() => {
            setOpen(!open);
          }}
          className={`ui selection dropdown ${open ? "visible active" : ""}`}
        >
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div
            onClick={() => {
              setOpen(!open);
            }}
            className={`menu ${open ? "visible transition" : ""}`}
          >
            {renderedOption}
          </div>
        </div>
      </div>
    </div>
  );
};
export default DropDown;
