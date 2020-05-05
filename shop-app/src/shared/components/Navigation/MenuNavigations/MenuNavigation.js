import React from "react";
import "./MenuNavigation.css";
import NavLinks from "../NavLinks/NavLinks";

const MenuNavigation = props => {
  return (
     <div className={`sub-menu-dropdown ${props.typeSubItem === '2' ? "sub-item-design" : ''}`}>
      <div className="container">
      <NavLinks typeSubItem={props.typeSubItem} items={props.subItems} classNames="sub-menu color-scheme-dark" />
      </div>
    </div>
  );
};
export default MenuNavigation;
