import React from "react";
import MenuItem from './MenuItem';
import "./MenuNavigation.css";
const DUMMY_MENU_ITEMS = [
  {
    url:
      "https://demo-basel.myshopify.com/blogs/hobbies/?preview_theme_id=179095442",
    title: "Blog Default",
    subItems: [],
    menuLable: 'new',
    isMainMenu: false
  },
  {
    url:
      "https://demo-basel.myshopify.com/blogs/hobbies/?preview_theme_id=179095442",
    title: "Alternative Style",
    subItems: [],
    menuLable:'hot',
    isMainMenu: false
  },
  {
    url:
      "https://demo-basel.myshopify.com/blogs/hobbies/?preview_theme_id=179095442",
    title: "Blog Full Width",
    subItems: [],
    menuLable: '',
    isMainMenu: false
  }
];

const MenuNavigation = props => {
  return (
    <div className="sub-menu-dropdown">
      <div className="container">
        <ul className="sub-menu color-scheme-dark">
          {DUMMY_MENU_ITEMS.map((menuItem, index) => (
            <MenuItem
              url={menuItem.url}
              title={menuItem.title}
              subItems={menuItem.subItems}
              menuLable={menuItem.menuLable}
              key={index}
              isMainMenu={menuItem.isMainMenu}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};
export default MenuNavigation;
