import React from 'react';
import "./MainHeader.css"

const MainHeader = (props) => {

    return (
        <header className="sticky-header header-clone color-scheme-dark act-scroll">
            {props.children}
        </header>)
}

export default MainHeader;