import React from "react";
import { IProduct } from "../lib/models/IProduct";
import ProductView from "./ProductView";

interface Props {
  listOfProducts: IProduct[];
}

const ProductList = ({ listOfProducts }: Props) => {
  return (
    <section>
      {listOfProducts.map((product) => (
        <ProductView key={product.id} product={product} />
      ))}
    </section>
  );
};

export default ProductList;
