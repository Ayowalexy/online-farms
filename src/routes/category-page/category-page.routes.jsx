import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import CategoryData from "../../category-data.json";
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
  Star,
} from "../../components/product-card/product-card.styles";
import "./categorypage.styles.scss";

const CategoryPage = ({ product }) => {
  const [categoryProducts, setCategoryProducts] = useState({});
  const params = useParams();
  const { addItemToCart } = useContext(CartContext);
  const addProductToCart = () => addItemToCart(product);
  const [num, setNum] = useState(12);

  const loadMore = () => {
    setNum(num + 4);
  };

  const navigate = useNavigate();
  const handleNavigate = (id) => {
    navigate(`/productPage/${id}`);
  };

  // const fetchData = async() => {
  //     const res = await fetch("https://jsonplaceholder.typicode.com/users");
  //     const resJson = await res.json();
  //     // setData(resJson);
  // }
  useEffect(() => {
    // fetchData();
    const categoryInfo = CategoryData.find(
      (element) => element.id === Number(params.id)
    );
    console.log("categorydata", categoryInfo);
    setCategoryProducts(categoryInfo);
  }, [params]);

  console.log(params);
  console.log(categoryProducts);
  return (
    <div className="total">
      <div className="title">{categoryProducts.title}</div>
      <div className="categoryContainer">
        {categoryProducts.products
           ?.filter((_, elem) => elem < num)
            ?.map(
          ({ imageUrl, name, price, id, rating }) => (
            <ProductCardContainer>
              <ProductOne onClick={() => handleNavigate(id)}>
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
                  {rating !== 0 ? (
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
                  ) : (
                    rating === 0 && "No ratings yet"
                  )}
                </Star>
              </ProductOne>
              <AddButton onClick={addProductToCart}>Add to cart</AddButton>
            </ProductCardContainer>
          )
        )}
      </div>
      <div className="center">
      {" "}
      <button className="button button-1" onClick={() => loadMore()}>
        {" "}
        LOAD MORE
      </button>
    </div>
    </div>
  );
};
export default CategoryPage;
