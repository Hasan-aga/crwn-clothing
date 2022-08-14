import styled from "styled-components";
import CustomButton from "../custom-button/custom-button.component";

export const ProductButton = styled(CustomButton)``;

export const ProductCardStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  height: fit-content;
  margin-bottom: 30px;
  position: relative;

  &:hover ${ProductButton} {
    opacity: 60%;
    width: 80%;
  }

  & img {
    width: 100%;
    object-fit: cover;
    overflow: hidden;
  }
`;

// .product-container {
//   display: flex;
//   flex-direction: column;
//   width: 90%;
//   height: fit-content;
//   margin-bottom: 30px;
//   position: relative;

//   .product-button {
//     position: absolute;
//     bottom: 40px;
//     left: 50%;
//     transform: translateX(-50%);
//     opacity: 0%;
//     width: 50%;
//     &:hover {
//       opacity: 100% !important;
//       background-color: black;
//       outline: 1px solid white;
//     }
//     &:active {
//       opacity: 100%;
//       background-color: #f7f7f7;
//       color: black;
//     }
//   }

//   &:hover .product-button {
//     opacity: 60%;
//     width: 80%;
//   }

//   & img {
//     width: 100%;
//     object-fit: cover;
//     overflow: hidden;
//   }
// }

// .product-text {
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 0 10px;
// }
