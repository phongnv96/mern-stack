import React from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";
import "./SideNav.css";
const SideNav = props => {
    const container = (
        <CSSTransition in={props.show}
            timeout={200}
            classNames="slide-in-left"
            mountOnEnter
            unmountOnExit
        >
            <aside className="side-nav" onClick={props.onClick}>{props.children}</aside>
        </CSSTransition>
    );
    return ReactDOM.createPortal(container, document.getElementById("drawer-hook"));
}

export default SideNav;