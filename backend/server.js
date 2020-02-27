const express = require("express");
const bodyParser = require("body-parser");
const uuid = require("uuid/v4");
const HttpError = require('./models/http-error');

const placesRoutes = require("./routes/places-routes");
const user = require("./routes/users-routes");

const app = express();

app.use(bodyParser.json());

app.use("/api/places", placesRoutes);
app.use("/api/user", user);

app.use((req, res, next) => {
  const error = new HttpError('Could not find this route', 404);
  throw error;
});

app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({ message: error.message || "An unknown error occured!" });
});

app.listen(5000); // start Node + Express server on port 5000
