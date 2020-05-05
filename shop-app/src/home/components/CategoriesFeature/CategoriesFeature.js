import React from "react";
import "./CategoriesFeature.css";
import Card from "../../../shared/components/UIElements/Card/Card";
import Button from "../../../shared/components/FormElements/Button/Button";

const DUMY_PRODUCT = [
  {
    columns: 6,
    items: [
      {
        title: "Bags",
        url: "/",
        urlImage:
          "//cdn.shopify.com/s/files/1/1933/6253/files/cat-bag-5-546x546_570x.progressive.jpg",
        icon: "fa-shopping-bag",
      },
    ],
  },
  {
    columns: 3,
    items: [
      {
        title: "Shoes",
        url: "/",
        urlImage:
          "//cdn.shopify.com/s/files/1/1933/6253/files/boot-category-1-3-273x273_270x.progressive.jpg",
        icon: "fa-apple",
      },
    ],
  },
  {
    columns: 3,
    items: [
      {
        title: "Watches",
        url: "/",
        urlImage:
          "//cdn.shopify.com/s/files/1/1933/6253/files/cat-watch-2-263x555_270x.progressive.jpg",
        icon: "fa-black-tie",
      },
    ],
  },
  {
    columns: 3,
    items: [
      {
        title: "Womens",
        url: "/",
        urlImage:
          "//cdn.shopify.com/s/files/1/1933/6253/files/boot-category-1-3-273x273_270x.progressive.jpg",
        icon: "fa-female",
      },
    ],
  },
];

const CategoriesFeature = (props) => {
  return (
    <>
      <div className="row categories-feature">
        {DUMY_PRODUCT.map((cate, cateIndex) => (
          <div className={`col-2 cate-columns`} key={cateIndex}>
            {cate.items.map((item, index) => (
              // <Card
              //   url={item.url}
              //   columns={item.columns}
              //   urlImage={item.urlImage}
              //   key={index}
              // >
              //   <Button hover>{item.title}</Button>
              // </Card>
              <div className="categories-item row" key={index}>
                <div className="categories-icon col-12">
                  <i className={`fa ${item.icon}`}></i>
                </div>
                <div className="categories-title col-12 ">{item.title}</div>
              </div>
            ))}
          </div>
        ))}
      </div>
      {/* <div className="categories-feature-footer">
        <div className="spb_wrapper">
          <div></div>
          <h6 className="cate-txt-footer">
            UP TO 70% OFF THE ENTIRE STORE! · MADE WITH LOVE by{" "}
            <a className="cate-txt-footer-link" href="/">
              jThemes studio
            </a>
          </h6>
        </div>
      </div> */}
    </>
  );
};

export default CategoriesFeature;
