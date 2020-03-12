import React from "react";
import MainHeader from "./MainHeader";
import "./MainNavigation.css";

const MainNavigation = props => {
  return (
    <MainHeader>
      <div className="container">
        <div className="site-logo">
          <h1 className="wrap-logo">
            <a href="/" className="base-logo">
              <img src="//cdn.shopify.com/s/files/1/1933/6253/files/logo-basel.svg" />
            </a>
          </h1>
        </div>
        <div className="main-nav">
          <ul>
            <li className="menu-item">
              <a href="/" target="_self">
                Home
              </a>
            </li>
            <li className="menu-item">
              <a href="/" target="_self">
                Home 2
              </a>
            </li>
          </ul>
        </div>
      </div>
    </MainHeader>
  );
};
export default MainNavigation