import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  margin-top: 10px;
  margin-bottom: 20px;
  background-color: #f7f7f7;

  @media screen and (max-width: 800px) {
    height: 80px;
    padding: 5px 20px;
    margin-bottom: 10px;
  }
`;

export const LogoContainer = styled(Link)`
  fill: black;
  width: 50px;
  height: 50px;
  @media screen and (max-width: 800px) {
    width: 24px;
    height: 24px;
  }
`;

export const Links = styled.ul`
  display: flex;
  gap: 10px;
  list-style: none;
  align-items: center;
  @media screen and (max-width: 800px) {
    gap: 20px;
  }
`;

export const LinkElement = styled(Link)`
  height: fit-content;
  padding: 1px 20px;
  @media screen and (max-width: 800px) {
    padding: 1px 3px;
  }
`;
// .navigation-container {
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 10px 20px;
//   margin-top: 10px;
//   margin-bottom: 20px;
//   background-color: #f7f7f7;
//   .logo {
//     fill: black;
//     width: 50px;
//     height: 50px;
//   }

//   .links {
//     display: flex;
//     gap: 10px;
//     list-style: none;
//     align-items: center;
//     .link {
//       height: fit-content;
//       padding: 1px 20px;
//     }
//   }
// }
