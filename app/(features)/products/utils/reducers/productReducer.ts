import { IProduct } from "../../lib/models/IProduct";
import { ProductActions, ProductActionTypes } from "../contexts/productContext";

export const productReducer = (state: IProduct[], action: ProductActions) => {
  switch (action.type) {
    case ProductActionTypes.ADDED:
        if(state.find((product) => product.id === action.payload.id)) {
            return state;
        }
      return [...state, action.payload];
    case ProductActionTypes.REMOVED:
      return state.filter((product) => product.id !== action.payload.id);
    default:
      return state;
  }
};
