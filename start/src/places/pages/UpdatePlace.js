import React, { useEffect, useState, useContext } from "react";
import { useParams, useHistory } from "react-router-dom";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH
} from "../../shared/util/Validatiors";
import Button from "../../shared/components/FormElements/Button";
import Input from "../../shared/components/FormElements/Input";
import Card from "../../shared/components/UIElements/Card";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
import ErrorModal from "../../shared/components/UIElements/ErrorModal";
import "./PlaceForm.css";
import { useForm } from "../../shared/hooks/form-hook";
import { useHttpClient } from "../../shared/hooks/http-hook";
import {AuthContext} from "../../shared/context/auth-context";

const UpdatePlace = props => {
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
  const [placeIdentify, setPlaceIdentify] = useState();
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const history = useHistory();
  const auth = useContext(AuthContext);

  useEffect(() => {
    const getPlaceById = async () => {
      try {
        const responeData = await sendRequest(
          `http://localhost:5000/api/places/${placeId}`,
          "GET"
        );
        setPlaceIdentify(responeData.place);
      } catch (error) {}
    };
    getPlaceById();
  }, [sendRequest, placeId]);

  useEffect(() => {
    if (placeIdentify) {
      setFormData(
        {
          title: { value: placeIdentify.title, isValid: true },
          description: {
            value: placeIdentify.description,
            isValid: true
          }
        },
        true
      );
    }
  }, [setFormData, placeIdentify]);

  const updatePlaceHandler = async event => {
    event.preventDefault();
    try {
      await sendRequest(
        `http://localhost:5000/api/places/update/${placeId}`,
        "PATCH",
        JSON.stringify({
          title: formState.inputs.title.value,
          description: formState.inputs.description.value
        }),
        { "Content-Type": "application/json" }
      );
      history.push(`/${auth.userId}/places`)
    } catch (error) {}
  };

  if (!placeIdentify) {
    return (
      <div className="center">
        <Card>
          <h2>Could not find place!</h2>
        </Card>
      </div>
    );
  }

  if (isLoading) {
    return <LoadingSpinner asOverlay />;
  }
  if (placeIdentify) {
    return (
      <React.Fragment>
        <ErrorModal error={error} onClear={clearError} />
        <form className="place-form" onSubmit={updatePlaceHandler}>
          <Input
            id="title"
            element="input"
            type="text"
            lable="Title"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter a valid title."
            onInput={inputHandler}
            initialValue={placeIdentify.title}
            initialValid={true}
          />
          <Input
            id="description"
            element="texarea"
            type="text"
            lable="Description"
            validators={[VALIDATOR_MINLENGTH(5)]}
            errorText="Please enter a valid description at least 5 character"
            onInput={inputHandler}
            initialValue={placeIdentify.description}
            initialValid={true}
          />
          <Button type="submit" disabled={!formState.isValid}>
            UPDATE PLACE
          </Button>
        </form>
      </React.Fragment>
    );
  }
};

export default UpdatePlace;
