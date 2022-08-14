import styled from "styled-components";
import { css } from "styled-components";

export const CartItemContainer = styled.div`
  display: flex;
  row-gap: 20px;
  align-items: center;
  margin-bottom: 20px;
  &:hover {
    background-color: #f7f7f7;
  }

  .trash-icon {
    width: 20px;
    display: inline-block;
    margin-left: 30px;
    transition: all 200ms;
    &:hover {
      cursor: pointer;
      transform: scale(1.2);
    }
  }

  .cart-item-text {
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: all 200ms;
    width: 100%;
    padding: 30px 20px;

    .tools-container {
      display: flex;
      align-items: center;
    }
  }

  .item-title {
    letter-spacing: 1.5;
    color: #444;
  }

  .item-info {
    font-weight: 100;
    color: #444;
    transition: all 200ms;
  }

  img {
    max-width: 40%;
    height: auto;
    object-fit: cover;
  }

  ${(props) =>
    props.checkoutItem &&
    css`
        border-bottom: 1px solid #888;
        img {
          width: 30%;
          margin-bottom: 10px;
        }
        .cart-item-text {
          max-width: 90%;
          background-color: none;
          display: flex;
          flex-direction: row;
          justify-content: space-around;
          gap: 50px;
          .item-title {
            font-size: 100%;
            flex-shrink: 0;
          }
          .tools-container {
            max-width: 90%;
            font-size: 200%;
            column-gap: 10px;
          }
          .item-info:last-of-type {
            margin-right: 100px;
          }

          .trash-icon {
            transform: scale(1.5);
          }
        }
      }

      .checkout-total {
        font-size: 30px;
        text-align: end;
        padding: 0px 30px;
      }
    `}
`;

// .cart-item-container {
//   display: flex;
//   row-gap: 20px;
//   align-items: center;
//   margin-bottom: 20px;
//   &:hover {
//     background-color: #f7f7f7;
//   }

//   .trash-icon {
//     width: 20px;
//     display: inline-block;
//     margin-left: 30px;
//     transition: all 200ms;
//     &:hover {
//       cursor: pointer;
//       transform: scale(1.2);
//     }
//   }

//   .cart-item-text {
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     transition: all 200ms;
//     width: 100%;
//     padding: 30px 20px;

//     .tools-container {
//       display: flex;
//       align-items: center;
//     }
//   }

//   .item-title {
//     letter-spacing: 1.5;
//     color: #444;
//   }

//   .item-info {
//     font-weight: 100;
//     color: #444;
//     transition: all 200ms;
//   }

//   img {
//     max-width: 40%;
//     height: auto;
//     object-fit: cover;
//   }
// }
