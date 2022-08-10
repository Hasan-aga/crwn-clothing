import "./navigation.style.scss";
import { Link, Outlet } from "react-router-dom";
import { Fragment, useContext } from "react";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import { UserContext } from "../../contexts/userContext";
import { CartContext } from "../../contexts/cartContext";
import { signUserOut } from "../../utils/firebase/firebase.util";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { dropDownStatus, toggleDropdown } = useContext(CartContext);

  const signUserOutAndResetUserContext = async () => {
    const confirmSignOut = window.confirm("are you sure you want to sign out?");
    console.log(confirmSignOut);
    if (!confirmSignOut) return;
    await signUserOut();
  };

  return (
    <Fragment>
      <div className="navigation-container">
        <Link to="/">
          <CrwnLogo className="logo" />
        </Link>
        <div className="right-links-container">
          <ul className="links">
            <li>
              <Link className="link" to="/greet">
                greet
              </Link>
            </li>
            <li>
              <Link className="link" to="/shop">
                Shop
              </Link>
            </li>
            <li>
              {currentUser ? (
                <Link
                  className="link"
                  to="/"
                  onClick={signUserOutAndResetUserContext}
                >
                  Sign Out
                </Link>
              ) : (
                <Link className="link" to="/signin">
                  Sign In
                </Link>
              )}
            </li>
            <li>
              <div onClick={toggleDropdown}>
                <CartIcon />
              </div>
            </li>
          </ul>
        </div>
        <CartDropdown active={dropDownStatus} />
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
