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
             <UserItem
              key={item.id}
              name={item.name}
              age={item.age}
              url={item.url}
              to={item.id}
              alt={item.alt}
              id={item.id}
             />
          ))}
        </ul>
      );
    }
  }
}

export default UserList;
