import { Fragment, useContext } from "react";
import { Outlet } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import Search from "../../components/search/search.component";
import CartDropdown from "../../components/cart-dropdown/cart-drop-down.component";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import { CartContext } from "../../context/cart.context";
import DropDown from "../../components/dropdown/dropdown.component";
import Account from "../../components/account/account.component";
import TemporaryDrawer from "../../components/mobilenav/mobile-nav";
import useMediaQuery from "../../components/usemediaquery";
import SmallNav from "../../components/smallnav/smallnav";
import {LogoContainer, NavLinks, NavLink, } from "./navigation.styles";
import { NavIcon, NavDropdownIcon, Text } from "../../components/account/account.styles";
import "./navigation.styles.scss"

const Navigation = () => {
  const { isCartOpen } = useContext(CartContext);
  const { isDropdownOpen } = useContext(CartContext);
  const matches = useMediaQuery('(min-width: 800px)')
  return (
    <Fragment>
      <div className="navigation">
        <LogoContainer to="/">
          <CrwnLogo className="logo" />
        </LogoContainer>
        <Search />
        <NavLinks>
          <Account />
          <NavLink>
            <NavIcon>
              <i class="bx bx-help-circle"></i>
            </NavIcon>
            <Text> Help </Text>
            <NavDropdownIcon>
              <i class="bx bxs-chevron-down"></i>
            </NavDropdownIcon>
          </NavLink>
          <CartIcon />
        </NavLinks>
       {isDropdownOpen && <DropDown />}
        {isCartOpen && <CartDropdown />}
      </div>
      <SmallNav/>
      {!matches && <TemporaryDrawer/>}
      
      <Outlet />
    </Fragment>
  );
};
export default Navigation;