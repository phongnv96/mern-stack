import React from "react";
import "./MenuNavigation.css";
const DUMMY_MENU_ITEMS = [
  {
    url:
      "https://demo-basel.myshopify.com/blogs/hobbies/?preview_theme_id=179095442",
    title: "Blog Default"
  },
  {
    url:
      "https://demo-basel.myshopify.com/blogs/hobbies/?preview_theme_id=179095442",
    title: "Alternative Style"
  },
  {
    url:
      "https://demo-basel.myshopify.com/blogs/hobbies/?preview_theme_id=179095442",
    title: "Blog Full Width"
  }
];

const MenuNavigation = props => {
  return (
    <div className="sub-menu-dropdown">
      <div className="container">
        <ul class="sub-menu color-scheme-dark">
          {DUMMY_MENU_ITEMS.map(menuItem => (
            <li>
              <a href={menuItem.url}>{menuItem.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default MenuNavigation;
