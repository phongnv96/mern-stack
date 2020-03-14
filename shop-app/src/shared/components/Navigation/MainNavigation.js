import React from "react";
import MainHeader from "./MainHeader";
import MenuItem from "./MenuNavigations/MenuItem";
import "./MainNavigation.css";
const DUMMY_PARENT_ITEM = [
  {
    url: "/",
    title: "Home",
    subItems: [1, 2, 3],
    isMainMenu: true,
    menuLable: "sale"
  },
  {
    url: "/",
    title: "Shop",
    subItems: [],
    isMainMenu: true,
    menuLable: ""
  }
];
const MainNavigation = props => {
  return (
    <MainHeader>
      <div className="container">
        {/* SITE LOGO */}
        <div className="site-logo">
          <h1
            className="wrap-logo"
            itemScope
            itemType="http://schema.org/Organization"
          >
            <a href="/" className="base-logo" itemProp="url">
              <img
                itemProp="logo"
                src="//cdn.shopify.com/s/files/1/1933/6253/files/logo-basel.svg"
                alt="hello"
              />
            </a>
          </h1>
        </div>

        <div className="main-nav">
          <ul>
            {DUMMY_PARENT_ITEM.map((items, index) => (
              <MenuItem
                url={items.url}
                title={items.title}
                subItems={items.subItems}
                isMainMenu={items.isMainMenu}
                menuLable={items.menuLable}
                key={index}
              />
            ))}
          </ul>
        </div>

        <div className="right-column">
          <div className="header-links">
            <ul>
              <li className="login-side-opener">
                <a href="/account/login">Login / Register</a>
              </li>
            </ul>
          </div>
          <div className="search-button basel-search-full-screen">
            <a href="#">
              <i className="simple-icon icon-magnifier"></i>
            </a>
          </div>
          <div className="account-login wishlist-info-widget">
            <a className="login-side-opener" href="/account">
              <i className="simple-icon icon-user"></i>
            </a>
          </div>
          <div className="account-login wishlist-info-widget">
            <a className="login-side-opener" href="/account">
              <i className="simple-icon icon-heart fa fa-heart"></i>
              <span className="gl_count_wishlist">0</span>
            </a>
          </div>

          <div className="shopping-cart basel-cart-design-1 basel-cart-icon cart-widget-opener">
            <a href="/cart">
              <i className="simple-icon icon-basket"></i>
              <span className="basel-cart-totals">
                <span className="basel-cart-number cartCount">0</span>
                <span className="subtotal-divider">/</span>
                <span className="basel-cart-subtotal">
                  <span className="shopify-Price-amount amount">
                    <span className="money">$0.00</span>
                  </span>
                </span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </MainHeader>
  );
};
export default MainNavigation;
