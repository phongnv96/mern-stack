import React, { Component } from "react";
import "./SideDrawer.css";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";
class SideDrawer extends Component {
  render() {
    const content = (
      <CSSTransition
        in={this.props.show}
        timeout={200}
        classNames="slide-in-left"
        mountOnEnter
        unmountOnExit
      >
        <aside className="side-drawer" onClick={this.props.onClick}>{this.props.children}</aside>
      </CSSTransition>
    );
    return ReactDOM.createPortal(
      content,
      document.getElementById("drawer-hook")
    );
  }
}

export default SideDrawer;
