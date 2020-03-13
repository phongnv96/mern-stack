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
    menuLable: 'sale',
  },
  {
    url: "/",
    title: "Shop",
    subItems: [],
    isMainMenu: true,
    menuLable: '',
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
                alt='hello'
              />
            </a>
          </h1>
        </div>
        <div className="main-nav">
          <ul>
            {DUMMY_PARENT_ITEM.map((items,index) => (
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
      </div>
    </MainHeader>
  );
};
export default MainNavigation;
