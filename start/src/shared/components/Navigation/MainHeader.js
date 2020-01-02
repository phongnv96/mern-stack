import React, { Component } from 'react';
import "./MainHeader.css"
class MainHeader extends Component {
    render() {
        return (
            <header className="main-header">
                {this.props.children}
            </header>
        );
    }
}

export default MainHeader;