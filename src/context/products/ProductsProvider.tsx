import { ProductsContext } from "./index";
import storeApi from '../../api/storeApi';
import { ReactNode, useEffect, useState } from 'react';

import { Product } from '../../interfaces/products/product';
import { IProductsResponse } from '../../interfaces/products/products-response';

export const ProductsProvider = ({ children }:{ children:  ReactNode}) => {

    const [isLoading, setIsLoading] = useState(false);
    const [products, setProducts] = useState<Product[]>([])

    const getAllProducts = async (): Promise<void> => {
        try {
            setIsLoading( true );
            
            const { data: { data } } = await storeApi.get<IProductsResponse>('/products');
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