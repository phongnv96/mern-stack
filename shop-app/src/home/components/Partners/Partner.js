import React from "react";
import "./Partner.css";

const Partner = props => {
  return (
    <div className="row partner-section">
      <div className="col-3">
        <h4 className="partner-title">Our partner</h4>
      </div>
      <div className="col-9 col-md-9 col-sm-12">
        <div className="row partner-bans">
          <div className="col-3">
            <a href="/">
              <img alt='1' src="//cdn.shopify.com/s/files/1/1933/6253/files/logo-6_3e3f040f-6cc8-42cb-8b05-0c00eed33e40_250x.png" />
            </a>
          </div>
          <div className="col-3">
            <a href="/">
              <img alt='2' src="//cdn.shopify.com/s/files/1/1933/6253/files/logo-1_3eaec68c-effb-4b4b-a813-8c70848632f0_250x.png" />
            </a>
          </div>
          <div className="col-3">
            <a href="/">
              <img alt='3' src="//cdn.shopify.com/s/files/1/1933/6253/files/logo-3_bc845363-2ec3-491c-b7b1-b6e42061176d_250x.png" />
            </a>
          </div>
          <div className="col-3">
            <a href="/">
              <img alt='4' src="//cdn.shopify.com/s/files/1/1933/6253/files/logo-5_678d8953-3425-47d7-acff-858fa4e4b851_250x.png" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Partner;
