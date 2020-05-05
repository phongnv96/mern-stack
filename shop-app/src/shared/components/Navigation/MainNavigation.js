import React, { useState } from "react";
import "./MainNavigation.css";
import MainHeader from "./MainHeader";
import Logo from "../UIElements/Logo/Logo";
import NavLinks from "./NavLinks/NavLinks";
import Backdrop from "../UIElements/BackDrop/BackDrop";
import SideNav from "./SideNav/SideNav";
const DUMMY_PARENT_ITEM = [
  {
    url: "/",
    title: "Home",
    subItems: [
      {
        url: "/",
        title: "Blog Default",
        subItems: [],
        menuLable: "new",
        isMainMenu: false
      },
      {
        url: "/",
        title: "Alternative Style",
        subItems: [],
        menuLable: "hot",
        isMainMenu: false
      },
      {
        url: "/",
        title: "Blog Full Width",
        subItems: [],
        menuLable: "",
        isMainMenu: false
      }
    ],
    typeSubItem: "1",
    isMainMenu: true,
    menuLable: "sale"
  },
  {
    url: "/",
    title: "Shop",
    subItems: [
      {
        parentPage: "Home",
        pageItems: [
          {
            url: "/",
            title: "Home Blog Default",
            subItems: [],
            menuLable: "new",
            isMainMenu: false
          },
          {
            url: "/",
            title: "Home Alternative Style",
            subItems: [],
            menuLable: "hot",
            isMainMenu: false
          },
          {
            url: "/",
            title: "Home Blog Full Width",
            subItems: [],
            menuLable: "",
            isMainMenu: false
          }
        ]
      },
      {
        parentPage: "Contact Us",
        pageItems: [
          {
            url: "/",
            title: "Contact Blog Default",
            subItems: [],
            menuLable: "new",
            isMainMenu: false
          },
          {
            url: "/",
            title: "Contact Alternative Style",
            subItems: [],
            menuLable: "hot",
            isMainMenu: false
          },
          {
            url: "/",
            title: "Contact Blog Full Width",
            subItems: [],
            menuLable: "",
            isMainMenu: false
          }
        ]
      }
    ],
    typeSubItem: "2",
    isMainMenu: true,
    menuLable: ""
  },
  {
    url: "/",
    title: "About us",
    subItems: [],
    typeSubItem: "1",
    isMainMenu: true,
    menuLable: ""
  },
  {
    url: "/",
    title: "Blog",
    subItems: [],
    typeSubItem: "1",
    isMainMenu: true,
    menuLable: ""
  }
];
const MainNavigation = props => {
  const [showSideNav, setShowSideNav] = useState(false);
  const openSideNav = () => {
    setShowSideNav(true);
  };

  const closeSideNav = () => {
    setShowSideNav(false);
  };

  return (
    <React.Fragment>
      {showSideNav && <Backdrop onClick={closeSideNav} />}
      {showSideNav && (
        <SideNav show={showSideNav} onClick={closeSideNav}>
          <nav className="main-navigation_drawer-nav">
            <NavLinks items={DUMMY_PARENT_ITEM} classNames="side-bar-menu" />
          </nav>
        </SideNav>
      )}
      <MainHeader>
        <button className="main-navigation__menu-btn" onClick={openSideNav}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div className="container">
          <div className="site-logo">
            <Logo alt="logo"></Logo>
          </div>

          <div className="main-nav">
            <NavLinks items={DUMMY_PARENT_ITEM} />
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
              <a href="/">
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
    </React.Fragment>
  );
};
export default MainNavigation;
