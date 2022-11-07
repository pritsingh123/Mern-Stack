import React from "react";

import PlaceList from "../components/PlaceList";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "building 1",
    description: "one of the best places",
    imageUrl:
      "https://cdn.britannica.com/98/94398-050-FBE19E2C/Skyscrapers-Singapore.jpg",
    address: "20 W 34th St., New York, NY 10001, United States",
    location: { lat: 40.7484, lng: 73.9857 },
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
  return <PlaceList item={DUMMY_PLACES} />;
};

export default UserPlaces;
