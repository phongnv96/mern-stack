import React from "react";
import "./TitleDivide.css";
const TitleDivide = props => {
  return (
    <div className="title-divide-section">
      <div className="gl_column-inner">
        <div className="spb_wrapper">
          <div className="title-wrapper">
            <span className="title-subtitle font-default">
              MADE THE HARD WAY
            </span>
            <div className="liner-continer">
              <span className="left-line"></span>
              <span className="title">
                FEATURED CATEGORIES
                <span className="title-separator">
                  <span></span>
                </span>
              </span>
              <span className="right-line"></span>
            </div>
          </div>
        </div>
      </div>
      { props.subDescription &&
        <div className="spb_wrapper">
          <p className="font-title">
            Basel &amp; Co. is a powerful eCommerce theme for Shopify. Visit our
            shop page to see all main features for{" "}
            <a href="/" className="color-primary" target="_blank">
              Your Store
            </a>
          </p>
        </div>
      }
    </div>
  );
};

export default TitleDivide;
