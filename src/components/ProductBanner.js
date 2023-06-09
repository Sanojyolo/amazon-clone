import React, { useEffect, useState } from "react";
import Productcard from "./Productcard";
import axios from "axios";
import "./ProductBanner.css";
import Moreproductcard from "./Moreproductcard";

const ProductBanner = () => {
  const [product, setProduct] = useState([]);
  const [anotherproduct, setAnotherproduct] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("https://fakestoreapi.com/products");
      setProduct(response.data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchAnotherData = async () => {
      const request = await axios.get(
        "https://dummyjson.com/products?limit=56"
      );

      setAnotherproduct(request.data.products);
      console.log(request.data.products);
    };
    fetchAnotherData();
  }, []);

  console.log(anotherproduct);

  return (
    <>
      <div className="product-overview">
        {product.map((item) => (
          <div className="productcard-item">
            <Productcard item={item} />
          </div>
        ))}
      </div>
      <div className="space-between"></div>
      <h1>Related to items you've viewed</h1>
      <div className="anothercard-flex">
        {anotherproduct.map((productdata) => (
          <Moreproductcard productdata={productdata} />
        ))}
      </div>
    </>
  );
};

export default ProductBanner;
