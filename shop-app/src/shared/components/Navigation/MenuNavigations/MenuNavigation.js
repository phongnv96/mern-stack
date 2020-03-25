import React from "react";
import "./MenuNavigation.css";
import NavLinks from "../NavLinks/NavLinks";

const MenuNavigation = props => {
  return (
    <div className="sub-menu-dropdown">
      <div className="container">
        <NavLinks items={props.subItems} classNames="sub-menu color-scheme-dark" />
      </div>
    </div>
  );
};
export default MenuNavigation;
