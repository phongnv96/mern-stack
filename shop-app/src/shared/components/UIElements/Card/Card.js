import React from "react";
import "./Card.css";

const Card = props => {
  return (
    <div className='cus-card'>
      <div className="cus-card-header">{props.headerTitle}</div>
      <div className="cus-card-body">
        {props.urlImage && <a href={props.urlItem}>
          <img src={props.urlImage} alt="abc" />
        </a>}
        {props.children}
      </div>
      <div className="cus-card-footer">
        <div className="cus-card-button">
        </div>
      </div>
    </div>
  );
};

export default Card;
