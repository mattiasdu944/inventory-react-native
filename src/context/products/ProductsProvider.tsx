import { ReactNode } from 'react';
import { ProductsContext } from "./index";

export const ProductsProvider = ({ children }:{ children:  ReactNode}) => {

    return (
        <ProductsContext.Provider
            value={{

            }}
        >
            { children }
        </ProductsContext.Provider>
    )
}