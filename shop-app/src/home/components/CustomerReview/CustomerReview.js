import React from "react";
import "./CustomerReview.css";
import TitleDivide from "../../../shared/components/UIElements/TitleDivideSection/TitleDivide";

const CustomerReview = props => {
  return (
    <div className="row customer-review">
      <div className="col-6 cus-rev-right-content">
        <TitleDivide />
        <div className="review-container">
          <div className="cus-avatar">
            <img
              src="//cdn.shopify.com/s/files/1/1933/6253/files/testimonial2-1-100x100_100x100.progressive.jpg"
              alt="customer"
            />
          </div>
          <div className="review-content">
            Fringilla iaculis ante torquent a diam a vestibulum diam nisi augue
            dictumst parturient a vestibulum tortor viverra inceptos adipiscing
            nec a ullamcorper.Ullamcorper aliquam rutrum.
            <footer>
              John Doe<span>Happy Customer</span>
            </footer>
          </div>
        </div>
      </div>
      <div className="col-6">
        
      </div>
    </div>
  );
};

export default CustomerReview;