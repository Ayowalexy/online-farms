import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { useContext } from 'react'
import { TopFoodContext } from '../../context/top-food.context'
import ProductCard from '../product-card/product-card.component';

import { TopFoodContainer } from "./multi-carousel.styles";

import './multi-carousel.styles.jsx';

import './multi-carousel.style.scss'

const Responsive = () => {
 const {foodProducts} = useContext(TopFoodContext);

    const responsive = {
      superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 4
      },
      desktop: {
        breakpoint: { max: 3000, min: 1101 },
        items: 4
      },
      tablet: {
        breakpoint: { max: 1100, min: 821 },
        items: 3
      },
      mobile: {
        breakpoint: { max: 500, min: 0 },
        items: 1
      }
    };
    
      return(
       <TopFoodContainer>
       <h2> Top selling products </h2>
       <Carousel responsive={responsive}>
       {foodProducts.filter((_, idx) => idx < 7).map((product) => (
         <ProductCard key={product.id} product={product} />
       ))}
     </Carousel>
       </TopFoodContainer>
      )
}
export default Responsive;
