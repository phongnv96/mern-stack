import React from "react";
import "./ProductViewDetail.css";
import Button from "../FormElements/Button/Button";

const ProductViewDetail = (props) => {
  return (
    <div className="row">
      <div className="p-d-left-content col-6 pl-0">
        <div className="p-d-l-images">
          <img src={props.urlImage} />
        </div>
      </div>
      <div className="p-d-right-content col-6 pt-4">
        <h2>{props.title}</h2>
        <div className="p-d-customer-review pb-3">(4 customer reviews)</div>
        <div className="p-d-price pb-3">${props.price}</div>
        <div className="p-d-description pb-3">{props.description}</div>
        <div className="p-d-select-color product-select-color p-1 pb-3">
          <input
            className="p-btn-select-color"
            style={{ backgroundColor: "red" }}
            color="red"
            name="color"
            type="radio"
          />
          <input
            className="p-btn-select-color"
            style={{ backgroundColor: "black" }}
            color="black"
            name="color"
            type="radio"
          />
          <input
            className="p-btn-select-color"
            style={{ backgroundColor: "yellow" }}
            color="yeallow"
            name="color"
            type="radio"
          />
        </div>
        <div className="p-d-cart pb-3">
          <input className="p-d-number" type="number" />
          <button className="p-d-btn-add-cart">ADD TO CART</button>
        </div>
        <div className="p-d-btn-action pb-3">
          <div className="p-btn-handdler">
            <div className="yith-wcwl-add-button">
              <a href="/account" rel="nofollow" class="p-btn-item">
                <i className="simple-icon icon-heart"></i> Login to use Wishlist
                {/* <span class="basel-tooltip-label">Login to use Wishlist</span>{" "}
                  Login to use Wishlist */}
              </a>
            </div>
          </div>
          <div className="p-btn-handdler">
            <a href="#compare_popup" className="" rel="nofollow">
              <i className="simple-icon icon-refresh"></i> Compare
              {/* <span class="basel-tooltip-label">Compare</span>Compare */}
            </a>
          </div>
        </div>
        <div className="p-d-more-information">
          <div>
            <label>Categories: </label>
            All, Feature, Shoes
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductViewDetail;
