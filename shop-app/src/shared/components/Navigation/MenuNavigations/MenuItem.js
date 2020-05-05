import React from "react";
import MenuNavigation from "../MenuNavigations/MenuNavigation";
import MenuLable from "../../UIElements/MenuLable/MenuLable";
import './MenuItem.css';
const MenuItem = props => {
    return (
        <li className={`${props.isMainMenu ? 'menu-item ' : 'child-menu '}${props.subItems.length ?
                "menu-item-has-children" : ''}`}>
            <a href={props.url} target="_self">
                {props.title}
                {props.menuLable && <MenuLable typeLable={props.menuLable}/>}
            </a>
            {props.subItems.length > 0 && <MenuNavigation typeSubItem={props.typeSubItem} subItems={props.subItems} />}
        </li>
    );
}

export default MenuItem