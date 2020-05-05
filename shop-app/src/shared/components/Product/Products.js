import React from "react";
import Card from "../UIElements/Card/Card";
const DUMMY_PRODUCT = {
  urlItem: "san pham 3",
  urlImage:
    "https://product.hstatic.net/1000299894/product/1.2.17.2.04.004.219.23.10700023___3__8a7ab342c5b049039fd3c53a63312e3f.jpg",
  backgroudColor: "",
};
const Product = (props) => {
  return (
    <div className="col-3">
      <Card urlImage={props.urlImage} />
    </div>
  );
};

export default Product;
