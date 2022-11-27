import React from "react";
import { useParams } from "react-router-dom";
import "./UpdatePlace.css";
import Input from "../../shared/components/FormElememts/Input";
import Button from "../../shared/components/FormElememts/Button";

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

  if (!myPlace) {
    return <div className="center">your place is not found</div>;
  }
  return (
    <form className="place-form">
      <Input
        id="title"
        value={myPlace.title}
        valid={true}
        element="input"
        label="title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title."
        onInput={() => {}}
      />

      <Input
        id="description"
        value={myPlace.description}
        valid={true}
        element="textarea"
        label="description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter a valid Description."
        onInput={() => {}}
      />

      <Button type="submit" disabled={true}>
        UPDATE
      </Button>
    </form>
  );
};

export default UpdatePlace;
