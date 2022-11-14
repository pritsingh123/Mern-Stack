import React from "react";

import Card from "../../shared/components/UIElements/Card";
import PlaceItem from "./PlaceItem";
import "./PlaceItem.css";
export const PlaceList = (props) => {
  if (props.item.length === 0) {
    return (
      <div className="place-list center">
        <Card>
          <h2>No Places found</h2>
        </Card>
        <button>Share Place</button>
      </div>
    );
  }
  return (
    <ul className="place-list">
      {props.item.map((place) => (
        <PlaceItem
          key={place.id}
          id={place.id}
          image={place.imageUrl}
          title={place.title}
          description={place.description}
          addresses={place.address}
          userId={place.userId}
          coordinates={place.location}
        />
      ))}
    </ul>
  );
};

export default PlaceList;
