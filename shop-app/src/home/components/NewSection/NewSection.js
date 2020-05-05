import React from "react";
import './NewSection.css';
import Card from "../../../shared/components/UIElements/Card/Card";
import MenuLable from "../../../shared/components/UIElements/MenuLable/MenuLable";
import sale from "../../../images/sale.png";
import sale1 from "../../../images/sale1.png";
import sale2 from "../../../images/sale2.png";
import winter from "../../../images/winter.png"

const DUMMY_NEW = [
  {
    display: "row",
    items: [
      {
        title: "sale 1",
        subTitle: "abcd",
        imageUrl: sale,
      },
      {
        title: "",
        subTitle: "",
        imageUrl: winter,
      },
    ],
  },
  {
    display: "colum",
    items: [
      {
        title: "",
        subTitle: "",
        imageUrl: sale1,
      },
      {
        title: "",
        subTitle: "",
        imageUrl: sale2,
      },
    ],
  },
];
const NewSection = (props) => {
  return (
    <div className="new-section">
      <div className="text-left p-4 ">
        <span className="p-feature-title">
          NEWS <MenuLable typeLable={"hot"} />
        </span>
      </div>
      <div className="new-section-container row">
        {DUMMY_NEW.map((item, index) => (
          <div className="col-6 p-0" key={index}>
            <div className={`row`}>
              {item.items.map((newInfor, newItems) => (
                <div className={`col-${item.display === 'row' ? 12 : 6}`} key={newItems}>
                  <Card urlImage={newInfor.imageUrl} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default NewSection;
