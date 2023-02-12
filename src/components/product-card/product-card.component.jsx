import CurrencyFormat from "react-currency-format";
import { CartContext } from "../../context/cart.context";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
//import Ribbon from "../../assets/black ribbon.png"
import { BsHeart } from "react-icons/bs";
import { BsHeartFill } from "react-icons/bs";
import { BsStarFill } from "react-icons/bs";
import { BsStar } from "react-icons/bs";

import "./biheart.styles.scss";

import {
  BestSeller,
  ProductCardContainer,
  ProductImg,
  ProductOne,
  ProductTag,
  ProductName,
  Currency,
  AddButton,
  Heart,
  ProductTop,
  Star
} from "../product-card/product-card.styles";

const ProductCard = ({ product }) => {
  const { imageUrl, name, price, id, tag, rating } = product;
  const { addItemToCart } = useContext(CartContext);
  const navigate = useNavigate();

  const addProductToCart = () => addItemToCart(product);
  return (
    <ProductCardContainer>
      <ProductOne onClick={() => navigate(`/productPage/${id}`)}>
        <ProductTop>
          <Heart>
            <BsHeart className="love" />
            <BsHeartFill className="lover" />
          </Heart>
          <ProductTag>
            <BestSeller> {tag} </BestSeller>
          </ProductTag>
        </ProductTop>
        <ProductImg src={imageUrl} alt={`${name}`} />
        <ProductName>
          {name.length > 27 ? name.slice(0, 20).concat("...") : name}
        </ProductName>
        <CurrencyFormat
          value={price}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"₦"}
          renderText={(price) => <Currency>{price}</Currency>}
        />
        <Star>
        { 
          rating !== 0
          ?
          (
            <>
            {Array(rating)
              .fill("_")
              .map((elem) => (
                <BsStarFill key={elem + Math.random()} />
              ))}
            {Array(5 - rating)
              .fill("_")
              .map((elem) => (
                <BsStar key={elem + Math.random()} />
              ))}
            </>
          )
          :
          rating === 0 && "No ratings yet"
        } 
          
      </Star>
      </ProductOne>
      <AddButton onClick={addProductToCart}>Add to cart</AddButton>
    </ProductCardContainer>
  );
};
export default ProductCard;
