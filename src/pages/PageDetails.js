import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PageDetails = () => {
  const { id } = useParams();
  const [products, setProducts] = useState();
  const [laoding, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`https://dummyjson.com/products/${id}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((result) => {
        setProducts(result);
        setLoading(false);
      });
  }, [id]);

  return (
    <>
      {laoding ? (
        <>
          <div class="loader-container">
            <div class="loader"></div>
          </div>
        </>
      ) : (
        <div class="product-container">
          Product Details Page
          <div class="product-container">
            <div class="product-info">
              <div>Title: {products?.title}</div>
              <div>Brand: {products?.brand}</div>
              <div>Category: {products?.category}</div>
              <div>Description: {products?.description}</div>
              <div>Discount: {products?.discountPercentage}</div>
              <div>Price: {products?.price}</div>
              <div>Rating: {products?.rating}</div>
              <div>Stock: {products?.stock}</div>
            </div>
            <div class="product-thumbnail">
              <img src={products?.thumbnail} alt="image" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PageDetails;
