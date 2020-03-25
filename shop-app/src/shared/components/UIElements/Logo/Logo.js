import React from "react";
import { URL_LOGO_IMG } from "../../../../shared/contants/Contant";
import "./Logo.css"
const Logo = (props) => {
    return <h1
        className="wrap-logo"
        itemScope
        itemType="http://schema.org/Organization"
    >
        <a href="/" className={`base-logo ${props.classNames}`} itemProp="url">
            <img
                itemProp="logo"
                src={URL_LOGO_IMG}
                alt={props.alt}
            />
        </a>
    </h1>
}

export default Logo