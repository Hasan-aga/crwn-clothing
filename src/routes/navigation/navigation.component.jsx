import "./navigation.style.jsx";
import { Outlet } from "react-router-dom";
import { Fragment, useContext } from "react";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import { UserContext } from "../../contexts/userContext";
import { CartContext } from "../../contexts/cartContext";
import { signUserOut } from "../../utils/firebase/firebase.util";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import {
  NavBar,
  LogoContainer,
  Links,
  LinkElement,
} from "./navigation.style.jsx";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { dropdownStatus, toggleDropdown } = useContext(CartContext);
  const signUserOutAndResetUserContext = async () => {
    const confirmSignOut = window.confirm("are you sure you want to sign out?");
    if (!confirmSignOut) return;
    await signUserOut();
  };

  return (
    <Fragment>
      <NavBar>
        <LogoContainer to="/">
          <CrwnLogo className="logo" />
        </LogoContainer>
        <Links>
          <li>
            <LinkElement to="/greet">greet</LinkElement>
          </li>
          <li>
            <LinkElement to="/shop">Shop</LinkElement>
          </li>
          <li>
            {currentUser ? (
              <LinkElement to="/" onClick={signUserOutAndResetUserContext}>
                Sign Out
              </LinkElement>
            ) : (
              <LinkElement to="/signin">Sign In</LinkElement>
            )}
          </li>
          <li>
            <div onClick={toggleDropdown}>
              <CartIcon />
            </div>
          </li>
        </Links>
        <CartDropdown active={dropdownStatus} />
      </NavBar>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
