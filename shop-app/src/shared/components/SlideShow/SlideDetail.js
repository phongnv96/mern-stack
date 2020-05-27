import React from "react";

const SildeDetail = (props) => {
  return (
    <div className="owl-item">
      <img src={props.urlImage}></img>
      {props.children}
    </div>
  );
};
export default SildeDetail;