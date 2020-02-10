import React, { Component } from "react";
import "./Button.css";
import { Link } from "react-router-dom";
class Button extends Component {
  render() {
    if (this.props.href) {
      return (
        <a
          className={`button button--${this.props.size || "default"} ${this
            .props.inverse && "button--inverse"} ${this.props.danger &&
            "button--danger"}`}
          href={this.props.href}
        >
          {this.props.children}
        </a>
      );
    }
    if (this.props.to) {
      return (
        <Link
          to={this.props.to}
          exact={this.props.exact}
          className={`button button--${this.props.size ||
            "default"} ${this.props.inverse && "button--inverse"} ${this.props.danger &&
            "button--danger"}`}
        >
          {this.props.children}
        </Link>
      );
    }
    return (
      <button
        className={`button button--${this.props.size || "default"} ${this.props.inverse &&
          "button--inverse"} ${this.props.danger && "button--danger"}`}
        type={this.props.type}
        onClick={this.props.onClick}
        disabled={this.props.disabled}
      >
        {this.props.children}
      </button>
    );
  }
}

export default Button;
