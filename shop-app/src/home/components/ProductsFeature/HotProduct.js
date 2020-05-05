import React from "react";
import "./HotProduct.css";
import MenuLable from "./../../../shared/components/UIElements/MenuLable/MenuLable";
import ProductItem from "../../../shared/components/Product/ProductItem";
const DUMMY_PRODUCR = [
  {
    title: "Áo thun kaki",
    urlItem: "san pham 1",
    price: "100000",
    urlImage:
      "https://product.hstatic.net/1000299894/product/1.2.17.2.14.003.219.23.50800054___2__91de157b60c146a784e69bee5b7f1c15.jpg",
    backgroudColor: "",
  },
  {
    title: "Quần bò pháp",
    urlItem: "san pham 2",
    urlImage:
      "https://product.hstatic.net/1000299894/product/1.2.17.2.04.072.119__6__d276b9216aa646299cb3d90723c31f0a.jpg",
    backgroudColor: "",
    price: "123456",
  },
  {
    title: "Kiềng itali",
    urlItem: "san pham 3",
    urlImage:
      "https://product.hstatic.net/1000299894/product/1.2.17.2.04.004.219.23.10700023___3__8a7ab342c5b049039fd3c53a63312e3f.jpg",
    backgroudColor: "",
    price: "13124433",
  },
  {
    title: 'Thổ cẩm đức',
    urlItem: "san pham 4",
    urlImage:
      "https://product.hstatic.net/1000299894/product/1.2.17.2.05.006.218.01.10600054-01.jpg",
    backgroudColor: "",
    price: "999900",
  },
  {
    title: 'Quần bò trum',
    urlItem: "san pham 5",
    urlImage:
      "https://product.hstatic.net/1000299894/product/1.2.02.1.06.002.120.01.10100011___3__45506b7a929b48c2882e927bc12ab832.jpg",
    backgroudColor: "",
    price: "12231112",
  },
];
const HotProduct = (props) => {
  return (
    <div className="product-feature">
      <div className="text-left p-4 ">
        <span className="p-feature-title">
          HOT PRODUCT <MenuLable typeLable={"hot"} />
        </span>
      </div>
      <div className="row">
        {DUMMY_PRODUCR.map((item, index) => (
          <div className="col-3" key={index}>
            {/* <Card urlImage={item.urlImage} key={index}></Card> */}
            <ProductItem price={item.price} title={item.title} urlImage={item.urlImage} />
          </div>
        ))}
      </div>
    </div>
  );
};
export default HotProduct;
