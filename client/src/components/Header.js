import React, { useState } from "react";
import "../css/Header.css";
import SearchIcon from "@material-ui/icons/Search";
import Dropdown from "./DropDown";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import logo from "../images/highqLogo.png";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
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
function Header(props) {
  const [selectedOption, setSelectedOption] = useState(options[0]);
  return (
    <div className="header">
      <Link to="/">
        <img className="header-img" src={logo}></img>
      </Link>

      <div className="header-search">
        <input className="search-input" type="text"></input>
        <SearchIcon className="header-searchIcon" />
      </div>
      <div className="header-nav">
        <div className="option white-bg">
          <span>Login</span>
          <ArrowDropDownIcon className="dropdown-arrow" />
        </div>
        <div className="option black-bg">
          <span>Track Order</span>
        </div>
        <Link to="/product">
          <div className="header-optionBasket">
            <ShoppingBasketIcon />
            <span className="option-line2 basket-count">
              {props.cart_count}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
