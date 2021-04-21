import React from "react";
import "../css/ProductHome.css";
import uploadImg from "../images/upload-img.png";
import DetailsSelector from "./DetailsSelector";

function ProductHome(props) {
  return (
    <div className="ProductHome">
      <div className="ProductHome-right">
        <form action="/product" encType="multipart/form-data" method="post">
          <div className="ProductForm">
            <img className="upload-img" src={uploadImg}></img>

            <div className="upload">
              <input
                className="fileUpload"
                type="file"
                name="file-to-upload"
              ></input>
              <input
                className="productButton"
                type="submit"
                value="Upload"
              ></input>
            </div>
          </div>
        </form>
      </div>
      <div className="ProductHome-left">
        <div className="product__home__left__heading">
          <h3>Document Selection</h3>
        </div>
        <div className="details__selector1">
          <DetailsSelector />
          <DetailsSelector />
          <DetailsSelector />
          <DetailsSelector />
        </div>
        <button onClick={() => {}} className="productButton">
          Add To Cart
        </button>
      </div>
    </div>
  );
}

export default ProductHome;
