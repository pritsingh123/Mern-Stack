import React from "react";
import { useParams } from "react-router-dom";
import "./UpdatePlace.css";
import Input from "../../shared/components/FormElememts/Input";
import Button from "../../shared/components/FormElememts/Button";

import { useForm } from "../../shared/hooks/form-hook";

import "./NewPlace.css";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from "../../shared/util/validators";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "building 1",
    description: "one of the best places",
    imageUrl:
      "https://cdn.britannica.com/98/94398-050-FBE19E2C/Skyscrapers-Singapore.jpg",
    address: "20 W 34th St., New York, NY 10001, United States",
    location: { lat: 43.648768, lng: -79.728264 },
    userId: "u1",
  },

  {
    id: "p2",
    title: "building 2",
    description: "one of the best places",
    imageUrl:
      "https://cdn.britannica.com/98/94398-050-FBE19E2C/Skyscrapers-Singapore.jpg",
    address: "20 W 34th St., New York, NY 10001, United States",
    location: { lat: 40.7484, lng: 73.9857 },
    userId: "u2",
  },
];

const UpdatePlace = (props) => {
  const placeId = useParams().placeId;

  const myPlace = DUMMY_PLACES.find((data) => data.id === placeId);

  const [formState, inputHandler] = useForm({
    title: {
      value: myPlace.title,
      isValid: true,
    },
    description: {
      value: myPlace.description,
      isValid: true,
    },
  });

  const placeUpdateSubmitHandler = (event) => {
    event.preventDefault();
    console.log(formState.inputs);
  };

  if (!myPlace) {
    return <div className="center">your place is not found</div>;
  }

  console.log(formState.inputs.title.value);
  return (
    <form className="place-form" onSubmit={placeUpdateSubmitHandler}>
      <Input
        id="title"
        element="input"
        label="title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title."
        onInput={inputHandler}
        initialValue={formState.inputs.title.value}
        intialValid={formState.inputs.title.isValid}
      />

      <Input
        id="description"
        element="textarea"
        label="description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter a valid Description."
        onInput={inputHandler}
        initialValue={formState.inputs.description.value}
        intialValid={formState.inputs.description.isValid}
      />

      <Button type="submit" disabled={!formState.isValid}>
        UPDATE
      </Button>
    </form>
  );
};

export default UpdatePlace;
