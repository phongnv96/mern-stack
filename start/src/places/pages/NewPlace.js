import React from "react";
import Input from "../../shared/components/FormElements/Input";
import ErrorModal from "../../shared/components/UIElements/ErrorModal";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH
} from "../../shared/util/Validatiors";
import "./PlaceForm.css";
import Button from "../../shared/components/FormElements/Button";
import { useForm } from "../../shared/hooks/form-hook";
import { useHttpClient } from "../../shared/hooks/http-hook";
import { useContext } from "react";
import { AuthContext } from "../../shared/context/auth-context";
import {useHistory} from "react-router-dom";
const NewPlace = props => {
  const auth = useContext(AuthContext);
  const [formState, inputHandler] = useForm(
    {
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
    },
    false
  );
  const history = useHistory();
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const placeSubmitHandler = async event => {
    event.preventDefault();
    try {
      await sendRequest(
        "http://localhost:5000/api/places/add",
        "POST",
        JSON.stringify({
          title: formState.inputs.title.value,
          description: formState.inputs.description.value,
          address: formState.inputs.address.value,
          creator: auth.userId
        }),
        {'Content-Type': 'application/json'}
      );
      history.push('/');
    } catch (err) {}
  };
  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError}/>
      <form className="place-form" onSubmit={placeSubmitHandler}>
        {isLoading && <LoadingSpinner asOverlay/>}
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
    </React.Fragment>
  );
};

export default NewPlace;
