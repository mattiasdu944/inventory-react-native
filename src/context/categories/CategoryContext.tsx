import { createContext } from 'react'
import { ICategory } from '../../interfaces/category/category';

interface ContextProps {
    categories: ICategory[]
}

export const CategoryContext = createContext( {} as ContextProps );