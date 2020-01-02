import React, { Component } from "react";
import "./SideDrawer.css";
import  ReactDOM  from "react-dom";
class SideDrawer extends Component {
  render() {
    const content = (
      <aside className="side-drawer">{this.props.children}</aside>
    );
    return ReactDOM.createPortal(
      content,
      document.getElementById("drawer-hook")
    );
  }
}

export default SideDrawer;
