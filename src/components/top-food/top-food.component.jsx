import { useContext } from 'react'
import { TopFoodContext } from '../../context/top-food.context'
import ProductCard from '../product-card/product-card.component';

import './top-food.styles.scss'

const TopFood = () => {
 const {foodProducts} = useContext(TopFoodContext);
 console.log(foodProducts);
    return(
        <div className='top-food-container'>
        {foodProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
        </div>
    )
}
export default TopFood;