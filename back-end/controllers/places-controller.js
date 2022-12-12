const HttpError = require("../models/http-error");
const uuid = require("uuid");
const { validationResult } = require("express-validator");

const getCoordsForAddress = require("../util/location");

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "place 1",
    description: "place 1 description",
    location: {
      lat: 40.7484474,
      lng: -73.9878584,
    },
    address: " 231 timberlane Drive",
    creator: "u1",
  },
  {},
];
const getPlaceById = (req, res, next) => {
  const placeId = req.params.pid;
  const place = DUMMY_PLACES.find((p) => {
    return p.id === placeId;
  });

  if (!place) {
    // return res.status(404).json({ error: "not found" });
    throw new HttpError("Could not find place", 404);
  }
  res.json({ place });
};

const getPlaceByUserId = (req, res, next) => {
  const userId = req.params.uid;
  const userPlaces = DUMMY_PLACES.filter((u) => {
    return u.creator === userId;
  });

  if (!userPlaces || userPlaces.length === 0) {
    return next(new HttpError("Could not find place for user", 404));
  }
  res.json({ places: userPlaces });
};

const createPlace = async (req, res, next) => {
  const err = validationResult(req);

  if (!err.isEmpty()) {
    next(new HttpError("Invalid Data Please check your data", 422));
  }

  const { title, description, creator, address } = req.body;
  let cordsFromFunction;
  try {
    cordsFromFunction = await getCoordsForAddress(address);
  } catch (err) {
    if (err) {
      return next(err);
    }
  }

  const createdPlace = {
    id: uuid.v4(),
    title,
    description,
    creator,
    location: cordsFromFunction,
    address,
  };

  DUMMY_PLACES.push(createdPlace);

  res
    .status(201)
    .json({ success: true, place: createdPlace, dummyplaces: DUMMY_PLACES });
};

const updatePlace = (req, res, next) => {
  const err = validationResult(req);
  if (!err.isEmpty) {
    throw new HttpError("Invalid Data Please check you data", 422);
  }
  const { title, description } = req.body;
  const placeId = req.params.pid;

  const updatedPlace = {
    ...DUMMY_PLACES.find((place) => place.id === placeId),
  };

  const placeIndex = DUMMY_PLACES.findIndex((p) => p.id === placeId);

  updatedPlace.title = title;
  updatedPlace.description = description;
  DUMMY_PLACES[placeIndex] = updatedPlace;

  res.status(200).json({
    Success: true,
    Message: "Place Updated Successfullly",
    place: updatedPlace,
  });
};

const deletePlace = (req, res, next) => {
  const placeId = req.params.pid;

  const placeIndex = DUMMY_PLACES.findIndex((p) => p.id === placeId);

  if (!placeIndex) {
    throw new HttpError("Could not find place", 404);
  }
  DUMMY_PLACES.splice(placeIndex, 1);

  res.status(200).json({
    success: true,
    message: "Place Deleted Successfully",
    dummyplaces: DUMMY_PLACES,
  });
};

exports.getPlaceById = getPlaceById;
exports.getPlaceByUserId = getPlaceByUserId;
exports.createPlace = createPlace;
exports.deletePlace = deletePlace;
exports.updatePlace = updatePlace;
