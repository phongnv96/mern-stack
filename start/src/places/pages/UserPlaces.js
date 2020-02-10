import React, { Component } from "react";
import PlaceList from "../components/PlaceList";
import { useParams } from "react-router-dom";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Empire State Building",
    description: "One of the famuos sky scrapers in the world",
    imageUrl:
      "https://journeyonair.com/wp-content/uploads/2018/03/sapa-e1534215628401.jpg",
    address: "20 W 34th St, New York, NY 10101",
    location: {
      lat: 40.7484405,
      lng: -73.9878584
    },
    creator: 1
  },
  {
    id: "p2",
    title: "Empire State Building",
    description: "One of the famuos sky scrapers in the world",
    imageUrl:
      "https://cdn.yeudulich.com/940x630/media/attraction/attraction/95/98/c9a8-518e-4d3b-b027-bc7f756703af.jpg",
    address: "20 W 34th St, New York, NY 10101",
    location: {
      lat: 40.7484405,
      lng: -73.9878584
    },
    creator: 2
  }
];

// class UserPlaces extends Component {
//   userId(){
//     return useParams().userId;
//   };
//   loadedPlaces(){
//     return DUMMY_PLACES.filter(place => place.creator === this.userId());
//   }
//   render() {
//     return <PlaceList items={this.loadedPlaces()} />;
//   }
// }

const UserPlaces = () => {
    const userId = useParams().userId;
    console.log('user',useParams());
    const loadedPlaces = DUMMY_PLACES.filter(place => place.creator == userId);
    return <PlaceList items={loadedPlaces} />;
} 

export default UserPlaces;
