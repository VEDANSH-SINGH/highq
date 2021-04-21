import React from "react";
import { Link } from "react-router-dom";
import "../css/Product.css";

function Product({ title, img, rating, price }) {
  return (
    <div>
      <Link to="/product">
        <div className="product">
          <div className="product-info">
            <p>{title}</p>
            <p className="product-price">
              <small>$</small>
              <strong>{price}</strong>
            </p>
            <div className="product-rating">
              {Array(rating)
                .fill()
                .map((_, i) => (
                  <p>⭐</p>
                ))}
            </div>
          </div>
          <img className="product-image" alt="" src={img}></img>
          <button>Add to Basket</button>
        </div>
      </Link>
    </div>
  );
}

export default Product;
