import React from 'react'
import { getProducts } from './utils/services/getProductData';
import ProductList from './components/ProductList';
import FavoriteProducts from './components/FavoriteProducts';


const page = async () => {
const products = await getProducts();
  
  return (
    <section className='flex gap-2'>
      <ProductList listOfProducts={products} />
      <FavoriteProducts />
    </section>
  )
}

export default page