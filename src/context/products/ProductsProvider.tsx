import { ProductsContext } from "./index";
import storeApi from '../../api/storeApi';
import { ReactNode, useEffect, useState } from 'react';
import { IProduct } from "../../interfaces/products/product";


export const ProductsProvider = ({ children }:{ children:  ReactNode}) => {

    const [isLoading, setIsLoading] = useState(false);
    const [products, setProducts] = useState<IProduct[]>([])

    const getAllProducts = async (): Promise<void> => {
        try {
            setIsLoading( true );
            const { data } = await storeApi.get<IProduct[]>('/products');
            setProducts(data);

            setIsLoading( false );
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getAllProducts();
    }, [])
    

    return (
        <ProductsContext.Provider
            value={{
                isLoading,
                products,
            }}
        >
            { children }
        </ProductsContext.Provider>
    )
}