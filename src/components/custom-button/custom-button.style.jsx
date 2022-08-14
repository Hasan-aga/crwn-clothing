import { css } from "styled-components";
import styled from "styled-components";

export const BasicButton = styled.button`
  background-color: #f7f7f7;
  border: 1px solid #444;
  padding: 20px 10px;
  color: #444;
  font-weight: 700;
  font-size: 14px;
  letter-spacing: -1px;
  transition: all 200ms;
  text-transform: uppercase;
  &:hover {
    cursor: pointer;
    background-color: #444;
    color: #f7f7f7;
  }

  ${(props) =>
    props.productButton &&
    css`
      position: absolute;
      bottom: 70px;
      left: 50%;
      transform: translateX(-50%);
      opacity: 0%;
      width: 60%;
      &:hover {
        opacity: 100% !important;
        background-color: black;
        outline: 1px solid white;
      }
      &:active {
        opacity: 100%;
        background-color: #f7f7f7;
        color: black;
      }
    `}

  ${(props) =>
    props.signUpButton &&
    css`
      background-color: #444;
      border: none;
      padding: 20px 10px;
      color: #f7f7f7;
      font-weight: 700;
      font-size: 16px;
      &:hover {
        cursor: pointer;
        background-color: #f7f7f7;
        outline: 1px solid #444;
        color: #444;
      }
    `}

  ${(props) =>
    props.signInGoogleButton &&
    css`
      background-color: #f87575;
      border: none;
      padding: 20px 10px;
      color: #f7f7f7;
      font-weight: 700;
      &:hover {
        cursor: pointer;
        background-color: #f7f7f7;
        outline: 1px solid #444;
        color: #444;
      }
    `}
`;

// export const SignupButton = styled(BasicButton)`
//   background-color: #444;
//   border: none;
//   padding: 20px 10px;
//   color: #f7f7f7;
//   font-weight: 700;
//   font-size: 16px;
//   &:hover {
//     cursor: pointer;
//     background-color: #f7f7f7;
//     outline: 1px solid #444;
//     color: #444;
//   }
// `;

// export const GoogleSignin = styled(BasicButton)`
//   background-color: #f87575;
//   border: none;
//   padding: 20px 10px;
//   color: #f7f7f7;
//   font-weight: 700;
//   &:hover {
//     cursor: pointer;
//     background-color: #f7f7f7;
//     outline: 1px solid #444;
//     color: #444;
//   }
// `;

// .customButton {
//   background-color: #f7f7f7;
//   border: 1px solid #444;
//   padding: 20px 10px;
//   color: #444;
//   font-weight: 700;
//   font-size: 16px;
//   transition: all 200ms;
//   text-transform: uppercase;
//   &:hover {
//     cursor: pointer;
//     background-color: #444;
//     color: #f7f7f7;
//   }
//   &.sign-up-button {
//     background-color: #444;
//     border: none;
//     padding: 20px 10px;
//     color: #f7f7f7;
//     font-weight: 700;
//     font-size: 16px;
//     &:hover {
//       cursor: pointer;
//       background-color: #f7f7f7;
//       outline: 1px solid #444;
//       color: #444;
//     }
//   }

//   &.sign-in-google-button {
//     background-color: #f87575;
//     border: none;
//     padding: 20px 10px;
//     color: #f7f7f7;
//     font-weight: 700;
//     &:hover {
//       cursor: pointer;
//       background-color: #f7f7f7;
//       outline: 1px solid #444;
//       color: #444;
//     }
//   }
// }
