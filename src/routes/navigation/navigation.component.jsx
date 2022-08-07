import "./navigation.style.scss";
import { Outlet } from "react-router-dom";
import { Fragment } from "react";
const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation-container">
        <a href="/">
          <img className="logo" src="" alt="logo"></img>
        </a>
        <div className="right-links-container">
          <ul className="links">
            <li>
              <a className="link" href="/greet">
                greet
              </a>
            </li>
            <li>
              <a className="link" href="/shop">
                Shop
              </a>
            </li>
            <li>
              <a className="link" href="/shop">
                Shop
              </a>
            </li>
          </ul>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
