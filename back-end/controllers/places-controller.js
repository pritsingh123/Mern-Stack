const HttpError = require("../models/http-error");

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

exports.getPlaceById = getPlaceById;
exports.getPlaceByUserId = getPlaceByUserId;
