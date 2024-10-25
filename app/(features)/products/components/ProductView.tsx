"use client";

import React, { useContext } from "react";
import { IProduct } from "../lib/models/IProduct";
import Link from "next/link";
import {
  ProductActionTypes,
  ProductContext,
} from "../utils/contexts/productContext";

interface Props {
  product: IProduct;
}

const ProductView = ({ product }: Props) => {
  const { dispatch } = useContext(ProductContext);
  return (
    <div>
      <Link href={`/products/${product.id.toString()}`}>{product.title}</Link>
      <button
        onClick={() =>
          dispatch({ type: ProductActionTypes.ADDED, payload: product })
        }
      >
        😍
      </button>
    </div>
  );
};

export default ProductView;
