import React from "react";
import { useParams } from "react-router-dom";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH
} from "../../shared/util/Validatiors";
import Button from "../../shared/components/FormElements/Button";
import Input from "../../shared/components/FormElements/Input";
import "./PlaceForm.css";
import { useForm } from "../../shared/hooks/form-hook";
import { useEffect, useState } from "react";
import Card from '../../shared/components/UIElements/Card';
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

const UpdatePlace = props => {
  const [isLoading, setIsLoading] = useState(true);
  const placeId = useParams().placeId;
  const [formState, inputHandler, setFormData] = useForm(
    {
      title: { value: "", isValid: false },
      description: {
        value: "",
        isValid: false
      }
    },
    false
  );
  const identifiedPlace = DUMMY_PLACES.find(p => p.id === placeId);
  useEffect(() => {
    if (identifiedPlace) {
      setFormData(
        {
          title: { value: identifiedPlace.title, isValid: true },
          description: {
            value: identifiedPlace.description,
            isValid: true
          }
        },
        true
      );
    }
    setIsLoading(false);
  }, [setFormData, identifiedPlace]);
  if (!identifiedPlace) {
    return (
      <div className="center">
        <Card><h2>Could not find place!</h2></Card>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="center">
        <h2>Loading...</h2>
      </div>
    );
  }

  return (
    <form className="place-form">
      <Input
        id="title"
        element="input"
        type="text"
        lable="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title."
        onInput={inputHandler}
        initialValue={formState.inputs.title.value}
        initialValid={formState.inputs.title.isValid}
      />
      <Input
        id="description"
        element="texarea"
        type="text"
        lable="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter a valid description at least 5 character"
        onInput={inputHandler}
        initialValue={formState.inputs.description.value}
        initialValid={formState.inputs.description.isValid}
      />
      <Button type="submit" disabled={!formState.isValid}>
        UPDATE PLACE
      </Button>
    </form>
  );
};

export default UpdatePlace;
