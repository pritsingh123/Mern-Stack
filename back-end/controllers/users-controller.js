const HttpError = require("../models/http-error");
const uuid = require("uuid");
const { validationResult } = require("express-validator");
const USERS = [
  {
    id: "u1",
    name: "prit",
    image:
      "https://cdn.searchenginejournal.com/wp-content/uploads/2022/04/reverse-image-search-627b7e49986b0-sej-760x400.png",
    places: 10,
  },
  {
    id: "u2",
    name: "pritsingh",
    image:
      "https://cdn.searchenginejournal.com/wp-content/uploads/2022/04/reverse-image-search-627b7e49986b0-sej-760x400.png",
    places: 20,
  },
  {
    id: "u3",
    name: "pritsingh",
    image:
      "https://cdn.searchenginejournal.com/wp-content/uploads/2022/04/reverse-image-search-627b7e49986b0-sej-760x400.png",
    places: 20,
  },
];

const getAllUsers = (req, res, next) => {
  res.status(200).json({ success: true, users: USERS });
};

const login = (req, res, next) => {
  var { id, name } = req.body;
  const iiuser = USERS.find((u) => u.id === id);
  if (!iiuser || iiuser.name !== name) {
    throw new HttpError("Could not find user", 401);
  }
  res.status(200).json({
    success: true,
    message: "Successfullly fetched the user",
    data: iiuser,
  });
};

const signUp = (req, res, next) => {
  const err = validationResult(req);
  if (!err.isEmpty) {
    throw new HttpError("Invalid Data Please check you data", 422);
  }

  const { name, email, password } = req.body;

  const foundUser = USERS.find((u) => u.email === email);

  if (foundUser) {
    throw new HttpError("Email Already exists", 422);
    // 422 means invalid user input
  }

  let newUser = {
    id: uuid.v4(),
    name,
    email,
    password,
  };

  USERS.push(newUser);
  res.status(200).json({
    success: true,
    message: "Successfullly Created The user",
    users: USERS,
  });
};

exports.getAllUsers = getAllUsers;
exports.login = login;
exports.signUp = signUp;
