import styled from "styled-components";

export const ProductCardContainer = styled.div`
  width: 93%;
  margin: 0 auto;
  height: 26rem;
  font-family: Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI",
    "Helvetica Neue", Arial, sans-serif;
  position: relative;
`;

export const ProductImg = styled.img`
  width: 100%;
  height: 14rem;
  object-fit: cover;
  cursor: pointer;
  position: relative;
`;
export const ProductOne = styled.div`
  font-family: Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI",
    "Helvetica Neue", Arial, sans-serif;
  position: relative;
  height: auto;
`;
export const ProductTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 8%;
  width: 100%;
`;
export const ProductTag = styled.div`
  z-index: 2;
  width: 4rem;
  height: 2rem;
  position: absolute;
  right: 0;
  background-color: rgb(85, 219, 85);
`;
export const BestSeller = styled.p`
  color: #010101;
  letter-spacing: 0.4px;
  position: absolute;
  top: -5%;
  right: 15%;
  z-index: 2;
  font-size: 0.75rem;
  font-weight: 600;
  font-family: "sora", sans-serif;
`;
export const ProductName = styled.p`
  font-size: 1.05rem;
  font-weight: 500;
  color: #010101;
`;
export const Currency = styled.div`
  font-weight: 600;
  font-size: 0.95rem;
  margin-top: -0.4rem;
`;
export const AddButton = styled.button`
  border: none;
  width: 12rem;
  height: 2.5rem;
  background-color: #fff;
  border-radius: .3rem;
  color: #ED5955;
  font-weight: 600;
  outline: 1px solid #ED5955;
  margin-top: 1.15rem;
  font-size: 0.95rem;
  cursor: pointer;
  transition: 1s transform ease-in-out;

  &:hover {
    background-color: #ED5955;
    color: #fff;
  }
`;
export const Heart = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  position: absolute;
  background-color: #fff;
  border-radius: 50%;
  left: 3%;
  width: 2.2rem;
  height: 2.1rem;
  cursor: pointer;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  }
  &:hover .love {
    display: none;
  }
  &:hover .lover {
    display: block;
  }
`;
export const Star = styled.div`
  margin-top: .8rem;
  color: #FAB814;
  font-size: 1.2rem;
  svg{
    margin-left: .25rem;
    }
`;
