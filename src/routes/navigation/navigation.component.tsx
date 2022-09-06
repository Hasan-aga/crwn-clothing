import { Outlet } from "react-router-dom";
import { Fragment } from "react";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { NavBar, LogoContainer, Links, LinkElement } from "./navigation.style";
import { useSelector, useDispatch } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selectors";
import { selectDropdownStatus } from "../../store/cart/cart.selector";
import { toggleDropdown } from "../../store/cart/cart-action";
import { signOutStart } from "../../store/user/user.action";

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
            <div role="dropdown-button" onClick={toggleDropdownMenu}>
              <CartIcon />
            </div>
            <CartDropdown active={dropdownStatus} />
          </li>
        </Links>
      </NavBar>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
