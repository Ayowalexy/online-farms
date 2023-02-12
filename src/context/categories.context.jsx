import { createContext, useState } from "react";
import CategoryData from '../category-data.json';


export const CategoriesContext = createContext({
    categoryProducts: {},
    setCategoryProducts: () => {}
});

export const CategoriesProvider = ({ children }) => {
    const [ categoryProducts, setCategoryProducts ] = useState(CategoryData);

    const value = { categoryProducts, setCategoryProducts}
    return <CategoriesProvider value = {value}> { children } </CategoriesProvider>
};