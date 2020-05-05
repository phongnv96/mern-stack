import React from "react"
import "./SlideShow.css"
import logo from "../../../image/backgroupd.png"

// const DUMMY_SLIDE_DATA = 
//     {
//         imgUrl: "/backgroupd.png",
//         title: ''
//     }



const SlideShow = props => {
    return (
        <div className="slide-show">
            <div className="wrapper">
                <div className="owl-item">
                    {/* <div className="main-wrapp-img" style={{backgroundImage: `url(${logo})`}} >
                    </div> */}
                    <img src={logo} alt="title" />
                </div>
            </div>
        </div>
    )
}
export default SlideShow;