import React from "react";

import { useParams } from "react-router-dom";
import PlaceList from "../components/PlaceList";
import Button from "../../shared/components/FormElememts/Button";

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

export const UserPlaces = () => {
  const userId = useParams().userId;
  const LOADED_PLACES = DUMMY_PLACES.filter((place) => place.userId === userId);
  return <PlaceList item={LOADED_PLACES} />;
};

export default UserPlaces;
