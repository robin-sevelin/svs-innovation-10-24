'use client';

import React, { useReducer } from "react";
import { ProductContext } from "./productContext";
import { productReducer } from "../reducers/productReducer";

interface Props {
  children: React.ReactNode;
}

const ProductContextProvider = ({ children }: Props) => {
  const [products, dispatch] = useReducer(productReducer, []);

  return (
    <ProductContext.Provider value={{ products, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;