import { Fragment } from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import CategoryItem from "../category/category.component";
import CategoryData from '../../category-data.json'

import './categories-carousel.styles.scss'

const Categories = ({categories}) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <Fragment>
      <div className="categories-container">
        <Carousel className="carousel" responsive={responsive}>
        {CategoryData.map((category) => (
            <CategoryItem category={category} key={category.id} id={category.id} />
           ))}
        </Carousel>
      </div>
    </Fragment>
  );
};
export default Categories;
