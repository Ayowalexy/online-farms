import CurrencyFormat from "react-currency-format";
import { CartContext } from "../../context/cart.context";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
//import Ribbon from "../../assets/black ribbon.png"
import { BsHeart } from "react-icons/bs";
import { BsHeartFill } from "react-icons/bs";
import { BsStarFill } from "react-icons/bs";
import { BsStar } from "react-icons/bs";

import "../../components/product-card/biheart.styles.scss";

import {
  ProductCardContainer,
  ProductImg,
  ProductOne,
  ProductName,
  Currency,
  AddButton,
  Heart,
  ProductTop,
  Star
} from "../../components/product-card/product-card.styles";

import './bulk-buy.styles.scss'

const BulkOne = ({bulkInfo}) => {
    const { imageUrl, name, price, id, rating = 2 } = bulkInfo;
    const { addItemToCart } = useContext(CartContext);
    const navigate = useNavigate();

    const addProductToCart = () => addItemToCart(bulkInfo);
    return(
      <ProductCardContainer>
      <ProductOne onClick={() => navigate(`/productPage/${id}`)}>
        <ProductTop>
          <Heart>
            <BsHeart className="love" />
            <BsHeartFill className="lover" />
          </Heart>
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
    )
}
export default BulkOne;