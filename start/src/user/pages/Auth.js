import React, { useState, useContext } from "react";
import "./Auth.css";
import Card from "../../shared/components/UIElements/Card";
import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import { useForm } from "../../shared/hooks/form-hook";
import {AuthContext} from "../../shared/context/auth-context";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_EMAIL
} from "../../shared/util/Validatiors";
const Auth = props => {  
  const [isLogin, setIsLogin] = useState(true);
  const [formState, inputHandler, setFormData] = useForm(
    {
      email: {
        value: "",
        isValid: false
      },
      password: {
        value: "",
        isValid: false
      }
    },
    false
  );
  const auth = useContext(AuthContext)
  const authSubmitHandler = event => {
    event.preventDefault();
    console.log(formState.inputs);
    auth.login();
  };

  const switchModeHandler = () => {
    if (!isLogin) {
      setFormData(
        {
          ...formState.inputs,
          name: undefined
        },
        formState.inputs.email.isValid && formState.inputs.password.isValid
      );
    } else {
      setFormData(
        {
          ...formState.inputs,
          name: {
            value: "",
            isValid: false
          }
        },
        false
      );
    }
    setIsLogin(preMode => !preMode);
  };
  return (
    <Card className="authentication">
      <h2>Login Required</h2>
      <hr />
      <form onSubmit={authSubmitHandler}>
        {!isLogin && (
          <Input
            element="input"
            id="name"
            type="text"
            lable="Your Name"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter a Name"
            onInput={inputHandler}
          />
        )}
        <Input
          element="input"
          id="email"
          type="email"
          lable="E-Mail"
          validators={[VALIDATOR_EMAIL()]}
          errorText="please enter a valid email address."
          onInput={inputHandler}
        />
        <Input
          element="input"
          id="password"
          type="password"
          lable="Password"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="please enter a valid  passowrd."
          onInput={inputHandler}
        />
        <Button type="submit" disabled={!formState.isValid}>
          {isLogin ? "LOGIN" : "SIGNUP"}
        </Button>
      </form>
      <Button inverse onClick={switchModeHandler}>
        SWITCH TO {isLogin ? "SIGN UP" : "LOGIN"}
      </Button>
    </Card>
  );
};

export default Auth;
