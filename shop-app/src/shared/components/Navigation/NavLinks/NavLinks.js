import React from "react";
import MenuItem from "../../Navigation/MenuNavigations/MenuItem";
import "./NavLinks.css";
const NavLinks = props => {
  // sub-menu color-scheme-dark
  switch (props.typeSubItem) {
    case "2":
      return (
        <>
          <ul className={props.classNames}>
            {props.items.map((parentItem, parentIndex) => (
              <li className={`${props.classNames} `} key={parentIndex}>
                <a href="/" className="menu-item-page" >{parentItem.parentPage}</a>
                <ul>
                  {parentItem.pageItems.map((menuItem, index) => (
                    <MenuItem
                      url={menuItem.url}
                      title={menuItem.title}
                      subItems={menuItem.subItems}
                      typeSubItem={menuItem.typeSubItem}
                      menuLable={menuItem.menuLable}
                      key={index}
                      isMainMenu={menuItem.isMainMenu}
                    />
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </>
      );
    default:
      return (
        <ul className={props.classNames}>
          {props.items.map((menuItem, index) => (
            <MenuItem
              url={menuItem.url}
              title={menuItem.title}
              subItems={menuItem.subItems}
              typeSubItem={menuItem.typeSubItem}
              menuLable={menuItem.menuLable}
              key={index}
              isMainMenu={menuItem.isMainMenu}
            />
          ))}
        </ul>
      );
  }
};

export default NavLinks;
