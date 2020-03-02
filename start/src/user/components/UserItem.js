import React, { Component } from "react";
import Avatar from "../../shared/components/UIElements/Avatar";
import Card from "../../shared/components/UIElements/Card"
import {Link} from "react-router-dom";
import "../components/UserItem.css";
class UserItem extends Component {
  render() {
    return (
      <li className="user-item">
        <Card className="user-item__content">
          <Link to={`/${this.props.id}/places`}>
          <div className="user-item__image">
            <Avatar image={this.props.url} alt={this.props.alt} />
          </div>
          <div className="user-item__info">
            <h2>{this.props.name}</h2>
            <h3>{this.props.age} Places</h3>
          </div>
          </Link>
        </Card>
      </li>
    );
  }
}

export default UserItem;
