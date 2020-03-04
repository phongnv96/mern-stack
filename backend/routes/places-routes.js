const express = require("express");
const { check } = require("express-validator");
const router = express.Router();
const placesControllers = require("../controllers/places-controller");
const fileUpload = require("../middleware/file-upload");
const checkAuth = require('../middleware/check-auth');

router.get("/:pid", placesControllers.getPlacesById);

router.get("/user/:uid", placesControllers.getPlaceByUserId);

router.use(checkAuth);

router.post(
  "/add",
  fileUpload.single("image"),
  [
    check("title")
      .not()
      .isEmpty(),
    check("description")
      .not()
      .isEmpty(),
    check("address")
      .not()
      .isEmpty(),
    check("creator")
      .not()
      .isEmpty()
  ],
  placesControllers.createPlace
);

router.patch(
  "/update/:pid",

  [
    check("title")
      .not()
      .isEmpty(),
    check("description")
      .not()
      .isEmpty()
  ],
  placesControllers.updatePlace
);

router.delete("/delete/:pid", placesControllers.deletePlace);

module.exports = router;
