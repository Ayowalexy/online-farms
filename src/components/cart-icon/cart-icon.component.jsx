import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';

import './cart-icon.styles.scss'
import { NavIcon, Text } from "../../components/account/account.styles";

const CartIcon = () => {
    const { isCartOpen, setIsCartOpen } = useContext(CartContext);
    const toggleCartOpen = () => setIsCartOpen(!isCartOpen)
    return(
        <div className="cart" onClick={toggleCartOpen}>
        <NavIcon><i class='bx bx-cart'></i></NavIcon>
        <Text>Cart</Text>
        </div>
    )
}
export default CartIcon;