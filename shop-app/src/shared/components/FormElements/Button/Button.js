import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";

const Button = props => {
  if (props.href) {
    return (
      <a
        className={`button button--${props.size || "default"} ${props.inverse &&
          "button--inverse"} ${props.danger && "button--danger"}`}
        href={props.href}
      >
        {props.children}
      </a>
    );
  }
  if (props.to) {
    return (
      <Link
        to={props.to}
        exact={props.exact}
        className={`button button--${props.size || "default"} ${props.inverse &&
          "button--inverse"} ${props.danger && "button--danger"}`}
      >
        {props.children}
      </Link>
    );
  }
  if (props.hover) {
    return (
      <div className="hover-mask">
        {/* <a href="/collections/bags" className="category-link-overlay"></a> */}
        <h3>{props.children}</h3>
        {/* <a href="/collections/bags">View products</a> */}
      </div>
    );
  }
  return (
    <button
      className={`button button--${props.size || "default"} ${props.inverse &&
        "button--inverse"} ${props.danger && "button--danger"}`}
      type={props.type}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default Button;
