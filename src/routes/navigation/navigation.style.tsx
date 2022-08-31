import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  margin-top: 10px;
  margin-bottom: 20px;
  background-color: #f7f7f7;
`;

export const LogoContainer = styled(Link)`
  fill: black;
  width: 50px;
  height: 50px;
`;

export const Links = styled.ul`
  display: flex;
  gap: 10px;
  list-style: none;
  align-items: center;
`;

export const LinkElement = styled(Link)`
  height: fit-content;
  padding: 1px 20px;
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
