import { useContext } from "react";
import { CartContext } from "../../context/cart.context";

import "./cart-icon.styles.scss";
import { NavIcon, Text } from "../../components/account/account.styles";

const CartIcon = () => {
  const {
    isCartOpen,
    setIsCartOpen,
    isDropdownOpen,
    setIsDropdownOpen,
    cartCount,
  } = useContext(CartContext);
  const toggleCartOpen = () => {
    if (isDropdownOpen) {
      setIsDropdownOpen(!isDropdownOpen);
    }
    setIsCartOpen(!isCartOpen);
  };
  return (
    <div className="cart" onClick={toggleCartOpen}>
      <NavIcon>
        <i class="bx bx-cart"></i>
      </NavIcon>
      <span className="item-count">{cartCount}</span>
      <Text>Cart</Text>
    </div>
  );
};
export default CartIcon;