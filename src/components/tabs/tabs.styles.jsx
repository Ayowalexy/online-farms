import styled from "styled-components";

export const BulkCards = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 2rem;
  column-gap: 1.3rem;
  width: 92%;
  margin: 0 auto;

  @media only screen and (max-width: 1100px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media only screen and (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media only screen and (max-width: 500px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
export const RetailCards = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 2rem;
  column-gap: 1.3rem;
  width: 92%;
  margin: 0 auto;

  @media only screen and (max-width: 1100px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media only screen and (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media only screen and (max-width: 500px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
export const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
`;
