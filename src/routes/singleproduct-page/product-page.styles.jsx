import styled from "styled-components";

export const SingleProductContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  height: 100%;
`;

export const AllContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 2rem;
  width: 100%;
  height: 42rem;
  padding-top: 4rem;
`;
export const ImagesContainer = styled.div`
  width: 100%;
  height: auto;
  border-radius: 0.3rem;
`;
export const TextContainer = styled.div`
  width: 100%;
  height: auto;
  margin-top: -0.7rem;
`;
export const SingleImg = styled.img`
  width: 100%;
  height: 30rem;
  object-fit: cover;
  border-radius: 0.3rem;
`;
export const Hearts = styled.div`
  width: 2.2rem;
  height: 2.2rem;
  margin-top: .8rem;
`;
export const TwoTexts = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: -1.3rem;
  margin-bottom: -2.5rem;
`;
export const Name = styled.h5`
  font-size: 1.65rem;
  font-weight: 500;
  color: #262626;
`;
export const Star = styled.div`
  margin-top: -1.3rem;
`;
export const Currencies = styled.h3`
font-size: 24px;
margin-top: 1.1rem;
color: #262626;
`
export const AddButtons = styled.button`
width: 100%;
height: 3.4rem;
border-radius: .3rem;
background-color: #ED5955;
border: none;
outline: none;
color: #fff;
font-size: 1.15rem;
font-weight: 500;

`
