import React from "react";
import './MenuLable.css';

const MenuLable = props => {
    return (
        <span className={`menu-label menu-label-${props.typeLable}`}>sale</span>
    );
}
export default MenuLable;