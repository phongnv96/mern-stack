import React, { Component } from "react";
import UserList from "../components/UserList";

class Users extends Component {
  Users = [
    {
      id: 1,
      name: "Phong",
      url:
        "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
      age: 2015,
      alt: "phongnv1"
    },
    {
      id: 2,
      name: "Phong",
      url:
        "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
      age: 2016,
      alt: "phongnv2"
    },
    {
      id: 3,
      name: "Phong",
      url:
        "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
      age: 2017,
      alt: "phongnv2"
    },
    {
      id: 4,
      name: "Phong",
      url:
        "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
      age: 2018,
      alt: "phongnv2"
    },
    {
      id: 5,
      name: "Phong",
      url:
        "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
      age: 2019,
      alt: "phongnv2"
    },
    {
      id: 6,
      name: "Phong",
      url:
        "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
      age: 2020,
      alt: "phongnv2"
    }
  ];
  render() {
    return <UserList items={this.Users} />;
  }
}

export default Users;
