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
          <Link to={`/${this.props.user.id}/places`}>
          <div className="user-item__image">
            <Avatar image={this.props.user.url} alt={this.props.user.alt} />
          </div>
          <div className="user-item__info">
            <h2>{this.props.user.name}</h2>
            <h3>{this.props.user.age}</h3>
          </div>
          </Link>
        </Card>
      </li>
    );
  }
}

export default UserItem;
