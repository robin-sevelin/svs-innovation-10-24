
import { PRODUCT_API_URL } from "../../lib/constants/baseValues";
import { IProduct } from "../../lib/models/IProduct";


const get = async <T>(url: string): Promise<T> => {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Failed to fetch data from ${url}`);
    }
    const data: T = await response.json();
    return data;
};

export const getProducts = async () => {
    const data = await get<{ products: IProduct[] }>(PRODUCT_API_URL);
    return data.products;
};

export const getProduct = async (id: string) => {
    const data = await get<IProduct>(`${PRODUCT_API_URL}/${id}`);
    return data;
};