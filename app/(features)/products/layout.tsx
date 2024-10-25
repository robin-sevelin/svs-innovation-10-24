import React, { ReactNode } from 'react'
import ProductContextProvider from './utils/contexts/ProductContextProvider';

interface Props {
    children: ReactNode;
};

const layout = ( {children}: Props) => {
  return (
    <ProductContextProvider>
    <section className='products-container'>{children}</section>
    </ProductContextProvider>
  )
}

export default layout