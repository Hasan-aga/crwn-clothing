import styled from "styled-components";

export const CategoryTitle = styled.div`
  margin-top: 50px;
  span {
    padding-left: 10px;
    font-size: 80px;
    text-transform: uppercase;
    line-height: 10px;
  }
`;

export const ShopProducts = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  row-gap: 50px;
  column-gap: 10px;
  padding: 10px;
`;

// .category-title {
//   margin-top: 50px;
//   span {
//     padding-left: 10px;
//     font-size: 80px;
//     text-transform: capitalize;
//     line-height: 10px;
//   }
// }
