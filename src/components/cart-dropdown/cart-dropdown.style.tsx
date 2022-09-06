import styled from "styled-components";

export const EmptyCart = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  span {
    padding: 20px;
    font-size: 20px;
    font-weight: 100;
  }
`;

export const DropDown = styled.div`
  position: absolute;
  width: 340px;
  height: 540px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;
  @media screen and (max-width: 800px) {
    right: 15px;
  }
  .empty-message {
    font-size: 18px;
    margin: 50px auto;
  }

  .cart-items {
    height: 90%;
    display: flex;
    flex-direction: column;
    overflow: scroll;
    overflow-x: hidden;
  }

  .cart-button {
    margin-top: auto;
    width: 100%;
  }
`;
// .cart-dropdown-container {
//   position: absolute;
//   width: 340px;
//   height: 540px;
//   display: flex;
//   flex-direction: column;
//   padding: 20px;
//   border: 1px solid black;
//   background-color: white;
//   top: 90px;
//   right: 40px;
//   z-index: 5;
//   .empty-message {
//     font-size: 18px;
//     margin: 50px auto;
//   }

//   .cart-items {
//     height: 90%;
//     display: flex;
//     flex-direction: column;
//     overflow: scroll;
//     overflow-x: hidden;
//   }

//   .cart-button {
//     margin-top: auto;
//     width: 100%;
//   }
// }
