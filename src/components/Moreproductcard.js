import React from "react";
import "./ProductBanner.css";
import "./Productcard.css";

const Moreproductcard = ({ productdata }) => {
  console.log(productdata);
  return (
    <div>
      <div className="card-another">
        <img
          src={productdata.images[0]}
          alt={productdata.title}
          className="images-another"
        />
        <h3>{productdata.brand}</h3>
        <p className="price">${productdata.price}</p>
        <p className="price">Rating: {productdata.rating}</p>
      </div>
    </div>
  );
};

export default Moreproductcard;
