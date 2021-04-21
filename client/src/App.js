import React, { useState } from "react";
import "./css/App.css";
import Header from "./components/Header.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SubHeader from "./components/SubHeader";
import Home from "./components/Home";
import ProductList from "./components/ProductList";
import HeroCarousel from "./components/HeroCarousel";
import UploadWidget from "./components/UploadWidget";
import DropdownMenu from "./components/DropdownMenu";

function App() {
  const [state, setState] = useState(0);
  const handleClick = () => {
    console.log("handleclick called");
  };
  return (
    <div className="App">
      <Router>
        <Header cart_count={state} />
        <SubHeader />
        <Switch>
          <Route path="/product">
            <UploadWidget handleClick={handleClick()} />
          </Route>
          <Route path="/">
            <HeroCarousel />
            <div className="home_product_bg">
              <Home />
              <ProductList />
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
