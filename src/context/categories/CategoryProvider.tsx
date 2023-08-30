import { ReactNode, useEffect, useState } from 'react';
import storeApi from '../../api/storeApi';

import { CategoryContext } from './CategoryContext';
import { ICategory } from '../../interfaces/category/category';


export const CategoryProvider = ({ children }:{ children:  ReactNode}) => {

    const [categories, setCategories] = useState<ICategory[]>([])

    const getAllCategories = async () => {
        const { data } = await storeApi.get('/categories');
        setCategories(data);
    }

    useEffect(() => {
        getAllCategories();
    }, [])
    

    return (
        <CategoryContext.Provider
            value={{
                categories
            }}
        >
            { children }
        </CategoryContext.Provider>
    )
}