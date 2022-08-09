import "./navigation.style.scss";
import { Link, Outlet } from "react-router-dom";
import { Fragment } from "react";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
const Navigation = () => {
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
              <Link className="link" to="/signin">
                Sign In
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;