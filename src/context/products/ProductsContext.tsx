import { createContext } from 'react'
import { IProduct } from '../../interfaces/products/product';

interface ContextProps {
    products: IProduct[] ;
    isLoading: boolean;
}


export const ProductsContext = createContext( {} as ContextProps );