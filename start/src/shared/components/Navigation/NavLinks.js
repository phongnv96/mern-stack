import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import "./NavLinks.css";
class NavLinks extends Component {
    render() {
        return (
            <ul className="nav-links">
                <li>
                <NavLink to="/" exact>ALL USERS</NavLink>
                </li>
                <li>
                <NavLink to="/1/places" >MY PLACES</NavLink>
                </li>
                <li>
                <NavLink to="/places/new" > ADD PLACE</NavLink>
                </li>
                <li>
                <NavLink to="/auth" exact>AUTHEN</NavLink>
                </li>
            </ul>
           
        );
    }
}

export default NavLinks;