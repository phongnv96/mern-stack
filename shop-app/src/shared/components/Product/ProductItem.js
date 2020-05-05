import React, { useState } from "react";
import "./ProductItem.css";
import Card from "../UIElements/Card/Card";
import Modal from "../UIElements/Modal/Modal";
import ProductViewDetail from "./ProductViewDetail";

const ProductItem = (props) => {
  const [showQuickViewModal, setShowQuickViewModal] = useState(false);

  const quickViewHandler = (event) => {
    const show = !showQuickViewModal;
    setShowQuickViewModal(show);
  };

  return (
    <>
      <div className="product-card-item">
        <Card urlImage={props.urlImage}>
          {/* btn section  */}
          <div className="product-btn">
            <div className="p-btn-handdler">
              <div className="yith-wcwl-add-button">
                <a href="/account" rel="nofollow" class="p-btn-item">
                  <i className="simple-icon icon-heart"></i>
                  {/* <span class="basel-tooltip-label">Login to use Wishlist</span>{" "}
                  Login to use Wishlist */}
                </a>
              </div>
            </div>
            <div className="p-btn-handdler">
              <a href="#compare_popup" className="" rel="nofollow">
                <i className="simple-icon icon-refresh"></i>
                {/* <span class="basel-tooltip-label">Compare</span>Compare */}
              </a>
            </div>
            <div className="p-btn-handdler">
              <span
                onClick={quickViewHandler}
                className="open-quick-view basel-tooltip"
              >
                <i className="simple-icon icon-magnifier-add"></i>
                {/* <span class="basel-tooltip-label">Quick View</span>Quick View */}
              </span>
            </div>
          </div>
        </Card>
        <div className="product-footer p-2">
          <div className="product-name pl-1 text-left">
            <a href="#">{props.title}</a>
          </div>
          <div className="product-selected">
            <div className="product-type-select">
              <div className="product-price p-1 text-left">
                <span>${props.price}</span>
              </div>
              <div className="product-add-cart">
                <i className="simple-icon icon-basket"></i>
                select option
              </div>
            </div>
            <div className="product-select-color p-1">
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
          </div>
        </div>
      </div>
      <Modal
        style={{ width: "60%", left: "20%" }}
        show={showQuickViewModal}
        onCancel={quickViewHandler}
        contentClass="place-item__modal-content"
        footerClass="place-item__modal-actions"
        header="Are you sure?"
        footerClass="place-item_modal-actions"
      >
        <ProductViewDetail
          urlImage={props.urlImage}
          price={1000}
          title={"Tho cam phap"}
          description={
            "Inceptos etiam vestibulum volutpat a vel dictum eu parturient neque dictumst viverra justo fusce natoque condimentum a netus facilisis justo bibendum suspendisse lobortis netus nulla suspendisse porttitor condimentum vestibulum.Mi."
          }
        />
      </Modal>
    </>
  );
};

export default ProductItem;
