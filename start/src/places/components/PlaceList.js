import React, { Component } from "react";
import "./PlaceList.css";
import Card from "../../shared/components/UIElements/Card";
import PlaceItem from "./PlaceItem";
import Button from "./../../shared/components/FormElements/Button";
class PlaceList extends Component {
  render() {
    if (this.props.items.length === 0) {
      return (
        <div className="place-list center">
          <Card>
            <h2>No Place found. Maybe create one?</h2>
            <Button to={`/places/new`} >Share Place</Button>
          </Card>
        </div>
      );
    } else {
      return (
        <ul className="place-list">
          {this.props.items.map(place => (
            <PlaceItem
              key={place.id}
              image={place.imageUrl}
              title={place.title}
              description={place.description}
              address={place.address}
              creatorId={place.creator}
              coordinates={place.location}
              id={place.id}
            />
          ))}
        </ul>
      );
    }
  }
}

export default PlaceList;
