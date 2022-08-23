import "./navigation.style.jsx";
import { Outlet } from "react-router-dom";
import { Fragment } from "react";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import { signUserOut } from "../../utils/firebase/firebase.util";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import {
  NavBar,
  LogoContainer,
  Links,
  LinkElement,
} from "./navigation.style.jsx";
import { useSelector, useDispatch } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selectors.js";
import { selectDropdownStatus } from "../../store/cart/cart.selector.js";
import { toggleDropdown } from "../../store/cart/cart-action.js";
import { signOutStart } from "../../store/user/user.action.js";
import { useOutsideClick } from "../../custom-hooks/useClickOutside.js";

const Navigation = () => {
  const dispatch = useDispatch();
  const dropdownStatus = useSelector(selectDropdownStatus);

  const currentUser = useSelector(selectCurrentUser);
  const signUserOutAndResetUserContext = () => {
    const confirmSignOut = window.confirm("are you sure you want to sign out?");
    if (!confirmSignOut) return;
    dispatch(signOutStart());
  };

  const toggleDropdownMenu = () => {
    dispatch(toggleDropdown(dropdownStatus));
  };

  const closeDropdown = () => {
    dispatch(toggleDropdown(true));
  };

  const ref = useOutsideClick(closeDropdown);

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
              <LinkElement
                to="/signin"
                onClick={signUserOutAndResetUserContext}
              >
                Sign Out
              </LinkElement>
            ) : (
              <LinkElement to="/signin">Sign In</LinkElement>
            )}
          </li>
          <li>
            <div ref={ref} onClick={toggleDropdownMenu}>
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
