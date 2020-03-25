import React from "react"
import "./SlideShow.css"

const DUMMY_SLIDE_DATA = 
    {
        imgUrl: 'https://cdn.shopify.com/s/files/1/0102/4383/3952/files/highcompress-slider_1.jpg?v=1575364413',
        title: ''
    }



const SlideShow = props => {
    return (
        <div className="slide-show">
            <div className="wrapper">
                <div className="owl-item">
                    <div className="main-wrapp-img" style={{backgroundImage: `url(${DUMMY_SLIDE_DATA.imgUrl})`}} >
                         
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SlideShow;