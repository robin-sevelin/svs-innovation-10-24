"use client";

import React, { useContext } from "react";
import {
  ProductActionTypes,
  ProductContext,
} from "../utils/contexts/productContext";

const FavoriteProducts = () => {
  const { products, dispatch } = useContext(ProductContext);

  if (!products.length) {
    return <div>No favorite products</div>;
  }

  return (
    <div>
      <h2>Favortite Products</h2>
      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.title}</h3>
          <button
            onClick={() =>
              dispatch({ type: ProductActionTypes.REMOVED, payload: product })
            }
          >
            🤮
          </button>
        </div>
      ))}
    </div>
  );
};

export default FavoriteProducts;
