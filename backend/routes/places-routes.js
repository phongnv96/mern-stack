const express = require("express");
const { check } = require("express-validator");
const router = express.Router();
const placesControllers = require('../controllers/places-controller');

router.get("/:pid", placesControllers.getPlacesById);

router.get("/user/:uid", placesControllers.getPlaceByUserId);

router.post("/",
    [
        check('title').not().isEmpty(),
        check('description').not().isEmpty(),
        check('coordinates').not().isEmpty(),
        check('address').not().isEmpty(),
        check('creator').not().isEmpty()
    ]
    , placesControllers.createPlace);

router.patch("/",
    [
        check('title').not().isEmpty(),
        check('description').not().isEmpty(),
        check('coordinates').not().isEmpty(),
        check('address').not().isEmpty(),
        check('creator').not().isEmpty()
    ],
    placesControllers.updatePlace);

module.exports = router;
