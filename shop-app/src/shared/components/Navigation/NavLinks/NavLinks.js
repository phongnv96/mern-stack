import React from "react";
import MenuItem from "../../Navigation/MenuNavigations/MenuItem";
import "./NavLinks.css";
const NavLinks = props => {
    // sub-menu color-scheme-dark
    return (
    <ul className={props.classNames}>
        {props.items.map((menuItem, index) => (
            <MenuItem
                url={menuItem.url}
                title={menuItem.title}
                subItems={menuItem.subItems}
                menuLable={menuItem.menuLable}
                key={index}
                isMainMenu={menuItem.isMainMenu}
            />
        ))}
    </ul>)
}

export default NavLinks;