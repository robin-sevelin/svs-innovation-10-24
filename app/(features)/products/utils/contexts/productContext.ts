'use client';

import { createContext, Dispatch } from "react";
import { IProduct } from "../../lib/models/IProduct";

export enum ProductActionTypes {
    ADDED = "ADDED",
    REMOVED = "REMOVED"
}

export interface ProductActions {
    type: ProductActionTypes;
    payload: IProduct;
}

interface ProductContext {
    products: IProduct[];
    dispatch: Dispatch<ProductActions>;
}

export const ProductContext = createContext<ProductContext>( { products: [], dispatch: () => {} } );