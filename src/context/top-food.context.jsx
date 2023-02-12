import { useState } from "react";
import { createContext } from "react";

import TopFoodProducts  from '../top-food.json'

export const TopFoodContext = createContext({
    foodProducts: [],
});


export const TopFoodProvider = ({children}) => {
    const [foodProducts, setfoodProducts] = useState(TopFoodProducts);
    const value = {foodProducts}
    //console.log(foodProducts)
    return <TopFoodContext.Provider value= {value}> {children} </TopFoodContext.Provider>
}