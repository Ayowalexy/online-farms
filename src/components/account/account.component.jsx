import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import { AccountContainer, NavDropdownIcon, NavIcon, Text } from './account.styles'
   
const Account = () => {
    const { isDropdownOpen, setIsDropdownOpen } = useContext(CartContext);
    const navDrop = () => setIsDropdownOpen(!isDropdownOpen);
    
    return(
        <AccountContainer onClick={navDrop}>
        <NavIcon>
        <i class="bx bx-user"></i>
      </NavIcon>
      <Text> Account </Text>
      <NavDropdownIcon>
        <i class="bx bxs-chevron-down"></i>
      </NavDropdownIcon>
        </AccountContainer>
    )
}
export default Account;