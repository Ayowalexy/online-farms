import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavigationContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  padding: 1rem 0;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  position: relative;
`;

export const LogoContainer = styled(Link)`
  padding-left: 3rem;
`;

export const SearchBox = styled.div`
  width: 40%;
  height: 45px;
  border: none;
  outline: none;
  padding: 8px 40px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  margin-left: 4rem;
  border-radius: 0.2rem;
  position: relative;
`;

export const NavLinks = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 3rem;
`;

export const NavLink = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 1.6rem;
`;


