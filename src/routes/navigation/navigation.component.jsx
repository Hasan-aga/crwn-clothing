import "./navigation.style.scss";
import { Link, Outlet } from "react-router-dom";
import { Fragment, useContext } from "react";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import { UserContext } from "../../contexts/userContext";
import { signUserOut } from "../../utils/firebase/firebase.util";
const Navigation = () => {
  const { currentUser } = useContext(UserContext);

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
          </ul>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
