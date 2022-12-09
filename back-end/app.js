const express = require("express");
const bodyParser = require("body-parser");

const HttpError = require("./models/http-error");
const placesRoutes = require("./routes/places-routes");

const app = express();

app.use(bodyParser.json());

app.use("/api/places", placesRoutes);

app.use((req, res, next) => {
  const error = new HttpError("Could not find API Endpoint", 404);
  throw error;
});

app.use((error, req, res, next) => {
  if (res.headersSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({ message: error.message || "Unknown error" });
});

// app.use(bodyParser, json);

app.listen(5100);
