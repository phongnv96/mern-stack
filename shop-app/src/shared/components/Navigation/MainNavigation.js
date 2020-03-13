import React from "react";
import MainHeader from "./MainHeader";
import MenuNavigation from "../Navigation/MenuNavigations/MenuNavigation";
import "./MainNavigation.css";
const DUMMY_PARENT_ITEM = [
  {
    url: "/",
    title: "Home",
    subItems: [1, 2, 3]
  },
  {
    url: "/",
    title: "Shop",
    subItems: []
  }
];
const MainNavigation = props => {
  return (
    <MainHeader>
      <div className="container">
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
              />
            </a>
          </h1>
        </div>
        <div className="main-nav">
          <ul>
            {DUMMY_PARENT_ITEM.map(items => (
              <li
                className={`menu-item ${items.subItems.length &&
                  "menu-item-has-children"}`}
              >
                <a href={items.url} target="_self">
                  {items.title}
                </a>
                {items.subItems.length > 0 && <MenuNavigation />}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </MainHeader>
  );
};
export default MainNavigation;
