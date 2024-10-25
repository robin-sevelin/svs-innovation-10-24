import React from "react";
import { getProduct } from "../utils/services/getProductData";
import Link from "next/link";

interface Props {
  params: { productId: string };
}

const page = async ({ params }: Props) => {
  const { productId } = await params;

  const foundProduct = await getProduct(productId);

  if (!foundProduct) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <h2>{foundProduct.title}</h2>
      <p>{foundProduct.description}</p>
      <p>Price: {foundProduct.price} $</p>
      <Link href={"/products"}>Take me back</Link>
    </div>
  );
};

export default page;
