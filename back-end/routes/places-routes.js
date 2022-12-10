const express = require("express");
const HttpError = require("../models/http-error");
const placeController = require("../controllers/places-controller");
const router = express.Router();

const { check } = require("express-validator");

router.get("/:pid", placeController.getPlaceById);

router.get("/user/:uid", placeController.getPlaceByUserId);

router.post(
  "/",
  [
    check("title").not().isEmpty(),
    check("description").isLength({ min: 5 }),
    check("address").not().isEmpty(),
  ],
  placeController.createPlace
);

router.patch(
  "/:pid",
  [check("title").not().isEmpty(), check("description").isLength({ min: 5 })],
  placeController.updatePlace
);

router.delete("/:pid", placeController.deletePlace);

module.exports = router;
