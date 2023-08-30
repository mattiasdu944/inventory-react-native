import { useContext } from 'react'
import { CategoryContext } from '../context/categories/CategoryContext'

export const useCategories = () => {
    return useContext( CategoryContext )
}
