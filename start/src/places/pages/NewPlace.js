import React, { Component, useReducer, useCallback } from "react";
import Input from "../../shared/components/FormElements/Input";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH
} from "../../shared/util/Validatiors";
import "./PlaceForm.css";
import Button from "../../shared/components/FormElements/Button";
import {useForm} from "../../shared/hooks/form-hook";

const NewPlace = props => {
  const [formState, inputHandler] = useForm({
    title: {
      value: "",
      isValid: false
    },
    description: {
      value: "",
      isValid: false
    },
    address: {
        value: "",
        isValid: false
      }
  }, false);
  const placeSubmitHandler = event => {
    event.preventDefault();
    console.log(formState.inputs);
  };
  return (
    <form className="place-form" onSubmit={placeSubmitHandler}>
      <Input
        id="title"
        element="input"
        type="text"
        lable="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText={"Please enter a valid"}
        onInput={inputHandler}
      />
      <Input
        id="description"
        element="textarea"
        type="text"
        lable="Description"
        validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(5)]}
        errorText={"Please enter a valid description (at least 5 character)."}
        onInput={inputHandler}
      />
      <Input
        id="address"
        element="input"
        type="text"
        lable="Address"
        validators={[VALIDATOR_REQUIRE()]}
        errorText={"Please enter a valid address."}
        onInput={inputHandler}
      />
      <Button type="submit" disabled={!formState.isValid}>
        ADD PLACE
      </Button>
    </form>
  );
};

export default NewPlace;
