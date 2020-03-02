import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./Backdrop.css";
class Backdrop extends Component {
    
  render() {
    return ReactDOM.createPortal(
      <div className="backdrop" onClick={this.props.onClick}></div>,
      document.getElementById("backdrop-hook")
    );
  }
}

export default Backdrop;
