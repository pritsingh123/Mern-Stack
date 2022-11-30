import React, { useState } from "react";

import Card from "../../shared/components/UIElements/Card";
import Button from "../../shared/components/FormElememts/Button";
import Model from "../../shared/components/UIElements/Model";
import Map from "../../shared/components/UIElements/Map";
import "./PlaceItem.css";
export const PlaceItem = (props) => {
  const [showMap, setShowMap] = useState(false);

  const [showConfirmModel, setShowConfirmModel] = useState(false);

  const openMapHandler = () => {
    setShowMap(true);
  };

  const closeMapHandler = () => {
    setShowMap(false);
  };

  const showDeleteWarningHandler = () => {
    console.log("pressed...");
    setShowConfirmModel(true);
  };

  const cancelDeleteWarningHandler = () => {
    setShowConfirmModel(false);
  };

  const confirmDeleteHandler = () => {
    console.log("in delete");
    setShowConfirmModel(false);
    console.log("OK DELETING.......");
  };

  return (
    <React.Fragment>
      <Model
        show={showMap}
        oncancel={closeMapHandler}
        header={props.addresses}
        contentClass="place-item__modal-content"
        footerClass="place-item__modal-actions"
        footer={<Button onClick={closeMapHandler}>CLOSE</Button>}
      >
        <div className="map-container">
          <Map center={props.coordinates} zoom={10} />
        </div>
      </Model>

      <Model
        show={showConfirmModel}
        oncancel={cancelDeleteWarningHandler}
        header="Are You Sure !!"
        footerClass="place-item__model-action"
        footer={
          <React.Fragment>
            <Button inverse onClick={cancelDeleteWarningHandler}>
              CANCEL
            </Button>
            <Button danger onClick={confirmDeleteHandler}>
              DELETE
            </Button>
          </React.Fragment>
        }
      >
        <p>Do you really want to delete this place ?</p>
      </Model>
      <li className="place-item">
        <Card className="place-item__content">
          <div className="place-item__image">
            <img src={props.image} alt={props.title}></img>
          </div>

          <div className="place-item__info">
            <h2>{props.title}</h2>
            <h3>{props.address}</h3>
            <p>{props.description}</p>
          </div>

          <div className="place-item__actions">
            <Button inverse onClick={openMapHandler}>
              VIEW ON MAP
            </Button>
            <Button to={`/places/${props.id}`}>EDIT</Button>
            <Button danger onClick={showDeleteWarningHandler}>
              DELETE
            </Button>
          </div>
        </Card>
      </li>
    </React.Fragment>
  );
};

export default PlaceItem;
