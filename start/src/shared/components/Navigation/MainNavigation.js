import React, { Component } from "react";
import MainHeader from "./MainHeader";
import { Link } from "react-router-dom";
import "./MainNavigation.css";
import NavLinks from "./NavLinks";
import SideDrawer from "./SideDrawer";
import Backdrop from "../UIElements/Backdrop";
class MainNavigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drawerIsOpne: false
    };
  }
  openDrawer = () => {
    this.setState(state => ({ drawerIsOpne: true }));
  };
  closeDrawer = () => {
    this.setState(state => ({
      drawerIsOpne: false
    }));
  };

  render() {
    return (
      <React.Fragment>
        {this.state.drawerIsOpne && <Backdrop onClick={this.closeDrawer} />}
        {this.state.drawerIsOpne && (
          <SideDrawer show={this.state.drawerIsOpne} onClick={this.closeDrawer}>
            <nav className="main-navigation_drawer-nav">
              <NavLinks />
            </nav>
          </SideDrawer>
        )}

        <MainHeader>
          <button
            className="main-navigation__menu-btn"
            onClick={this.openDrawer}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <h1 className="main-navigation__title">
            <Link to="/"> YourPlace </Link>
          </h1>
          <nav className="main-navigation_drawer-nav main-navigation_drawer-nav-inline">
            <NavLinks />
          </nav>
        </MainHeader>
      </React.Fragment>
    );
  }
}

export default MainNavigation;
