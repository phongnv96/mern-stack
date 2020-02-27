const express = require("express");
const router = express.Router();
const placesControllers = require('../controllers/places-controller');

router.get("/:pid", placesControllers.getPlacesById);

router.get("/user/:uid", placesControllers.getPlaceByUserId);

router.post("/", placesControllers.createPlace)

module.exports = router;
