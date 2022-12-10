const express = require("express");
const HttpError = require("../models/http-error");
const userController = require("../controllers/users-controller");
const router = express.Router();

const { check } = require("express-validator");

router.get("/", userController.getAllUsers);

router.post(
  "/signUp",
  [
    check("name").not().isEmpty(),
    check("email").normalizeEmail().isEmail(),
    check("password").isLength({ min: 5 }),
  ],
  userController.signUp
);
router.post("/login", userController.login);

module.exports = router;
