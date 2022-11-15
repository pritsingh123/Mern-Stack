import React from "react";

import Input from "../../shared/components/FormElememts/Input";
import { VALIDATOR_REQUIRE } from "../../shared/util/validators";
import "./NewPlace.css";
export const NewPlace = () => {
  return (
    <form className="place-form">
      <Input
        type="input"
        label="Title"
        element="input"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Error Text"
      />
    </form>
  );
};

export default NewPlace;
