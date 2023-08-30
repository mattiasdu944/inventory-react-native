import { useContext } from 'react'
import { ProductsContext } from '../context/products'

export const useProducts = () => {
    return useContext( ProductsContext )
}
