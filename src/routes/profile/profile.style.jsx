import styled from "styled-components";
export const BoughtProductListContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 60px;
  padding: 50px;
  border: solid 1px #999;

  & h3 {
    align-self: center;
  }
`;

export const ProductGroupContainer = styled(BoughtProductListContainer)`
  row-gap: 100px;
  border: none;
`;
