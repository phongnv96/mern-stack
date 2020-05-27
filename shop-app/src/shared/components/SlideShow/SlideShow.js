import React, { useState } from "react";
import "./SlideShow.css";
import SlideDetail from "./SlideDetail";
import logo from "../../../images/backgroupd.png";
import logo2 from "../../../images/backgroud-2.png";
import arrowLeft from "../../../images/next.svg";
import arrowRight from "../../../images/back.svg";

const DUMMY_SLIDE_DATA = [
  {
    imgUrl: logo,
    title: "logo 1",
  },
  {
    imgUrl: logo2,
    title: "",
  },
];

const SlideShow = (props) => {
  const [currentOffset, setCurrentOffset] = useState(0);
  const styleContainer = { transform: `translate(${currentOffset}vw)` };
  const next = ($event) => {
    $event.preventDefault();
    setCurrentOffset(currentOffset + 100);
  };
  const back = ($event) => {
    $event.preventDefault();
    setCurrentOffset(currentOffset - 100);
  };
  return (
    <div className="slide-show">
      <div
        className="slide-wrapper"
        style={{ height: props.height, width: props.width }}
      >
        <ul className="slide-container" style={styleContainer}>
          {DUMMY_SLIDE_DATA.map((item, index) => (
            <li
              className="slide-detail"
              key={index}
              style={{ height: props.height, width: props.width }}
            >
              <SlideDetail
                urlImage={item.imgUrl}
                height={props.height}
                width={props.width}
              />
            </li>
          ))}
        </ul>
        <span className="slide-btn-move arrow-left">
          <img className="arrow-icon" src={arrowLeft} onClick={back} />
        </span>
        <span className="slide-btn-move arrow-right" onClick={next}>
          <img className="arrow-icon" src={arrowRight} />
        </span>
      </div>
    </div>
  );
};
export default SlideShow;
