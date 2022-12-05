const express = require("express");

const router = express.Router();

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

router.get("/:pid", (req, res, next) => {
  const placeId = req.params.pid;
  const place = DUMMY_PLACES.find((p) => {
    return p.id === placeId;
  });

  if (!place) {
    return res.status(404).json({ error: "not found" });
  }
  res.json({ place });
});

router.get("/user/:uid", (req, res, next) => {
  const userId = req.params.uid;
  const userPlaces = DUMMY_PLACES.filter((u) => {
    return u.creator === userId;
  });

  if (!userPlaces) {
    return res.status(404).json({ error: "not found" });
  }
  res.json({ places: userPlaces });
});

module.exports = router;
