import { CartContext } from "../../context/cart.context";
import { useParams } from "react-router-dom";
import { useEffect, useState, Fragment, useContext } from "react";
import BulkData from '../../bulk-food.json'
import { AllContainer, ImagesContainer, SingleImg, SingleProductContainer, TextContainer, Hearts, TwoTexts, Name, Currencies, AddButtons } from "./product-page.styles";

import { BsStar, BsStarFill } from "react-icons/bs"
import { BiHeart } from "react-icons/bi"
import CurrencyFormat from "react-currency-format";

import { Star } from "../../components/product-card/product-card.styles";
import "./product-page.styles.scss"
const ProductPage = () => {
    const { addItemToCart } = useContext(CartContext);
  
    const addProductToCart = () => addItemToCart(productData);


    const [ productData, setProductData] = useState({});
    const params = useParams();

    useEffect(() => {
        const productInfo = BulkData.find((element) => element.id === Number(params.id))
    setProductData(productInfo);
    console.log(productInfo);

    }, [params])
    console.log(params);
    console.log(productData);
   
    return(
        <Fragment>
            <SingleProductContainer>
            <AllContainer>
            <ImagesContainer>
            <SingleImg src={productData.imageUrl} alt=""/>
            </ImagesContainer>
            <TextContainer>
            <TwoTexts>
            <Name>{productData.name}</Name>
            <Hearts>
            <BiHeart className="loves" />
          </Hearts>
            </TwoTexts>
            <Star>
            { 
              productData.rating !== 0
              ?
              (
                <>
                {Array(productData.rating || 0)
                  .fill("_")
                  .map((elem) => (
                    <BsStarFill key={elem + Math.random()} />
                  ))}
                {Array(5 - productData.rating || 0)
                  .fill("_")
                  .map((elem) => (
                    <BsStar key={elem + Math.random()} />
                  ))}
                </>
              )
              :
              productData.rating === 0 && "No ratings yet"
            } 
              
          </Star>
          <div className="hr">
          </div>
          <CurrencyFormat
          value={productData.price}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"₦"}
          renderText={(price) => <Currencies>{price}</Currencies>}
        />
        <div className="hr">
        </div>
      <AddButtons onClick={addProductToCart}>Add to cart</AddButtons>

            </TextContainer>
            </AllContainer>
            </SingleProductContainer>
        </Fragment>
    )
}
export default ProductPage;