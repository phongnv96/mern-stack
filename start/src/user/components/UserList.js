import React, { Component } from "react";
import UserItem from "../components/UserItem";
import "../components/UserList.css";
class UserList extends Component {
  render() {
    if (this.props.items.length === 0) {
      return <div>No user</div>;
    } else {
      return (
        <ul className="users-list">
          {this.props.items.map(item => (
             <UserItem user={item} />
          ))}
        </ul>
      );
    }
  }
}

export default UserList;
