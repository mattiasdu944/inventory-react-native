import { createContext } from 'react'
import { Product } from '../../interfaces/products/product';

interface ContextProps {
    products: Product[] ;
    isLoading: boolean;
}


export const ProductsContext = createContext( {} as ContextProps );