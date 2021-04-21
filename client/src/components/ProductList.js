import React from "react";
import "../css/ProductList.css";
import Product from "./Product";

function ProductList() {
  return (
    <div className="productlist">
      <div className="product-row">
        <Product
          title="How To Do The Work: Recognise Your Patterns, Heal from Your Past, and Create Your Sel"
          img="https://images-na.ssl-images-amazon.com/images/I/51nBlIIGQqL._SX329_BO1,204,203,200_.jpg"
          price="13.33"
          rating={4}
        />

        <Product
          title="How To Do The Work: Recognise Your Patterns, Heal from Your Past, and Create Your Sel"
          img="https://images-na.ssl-images-amazon.com/images/I/51nBlIIGQqL._SX329_BO1,204,203,200_.jpg"
          price="13.33"
          rating={4}
        />

        <Product
          title="How To Do The Work: Recognise Your Patterns, Heal from Your Past, and Create Your Sel"
          img="https://images-na.ssl-images-amazon.com/images/I/51nBlIIGQqL._SX329_BO1,204,203,200_.jpg"
          price="13.33"
          rating={4}
        />
      </div>
    </div>
  );
}

export default ProductList;
