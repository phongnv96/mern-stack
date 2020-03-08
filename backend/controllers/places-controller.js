const fs = require("fs");
const HttpError = require("../models/http-error");
const { validationResult } = require("express-validator");
const mongoose = require("mongoose");
const getCoordsForAddress = require("../util/location");
const Place = require("../models/places");
const User = require("../models/user");

/**
 * get place by id
 * @author phongnv1
 * @readonly please safe read code before edit this method
 */
const getPlacesById = async (rep, res, next) => {
  const placeId = rep.params.pid;
  let place;
  try {
    place = await Place.findById(placeId).exec();
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, Cuold not find a place.",
      500
    );
    return next(error);
  }

  if (!place) {
    return next(
      new HttpError("Could not find a place for the provided id.", 404)
    );
  }
  res.status(200).json({ place: place.toObject({ getters: true }) });
};

/**
 * get place by userId
 * @author phongnv1
 * @readonly please safe read code before edit this method
 */
const getPlaceByUserId = async (rep, res, next) => {
  const userId = rep.params.uid;
  let userWithPlaces;
  try {
    userWithPlaces = await User.findById(userId).populate("places");
  } catch (err) {
    const error = new HttpError(
      "Fetching places failed, please try again!",
      500
    );
    return next(error);
  }
  if (!userWithPlaces || userWithPlaces.places.length === 0) {
    next(new HttpError("Could not find a place for the provided id.", 404));
  }
  res
    .status(200)
    .json({
      places: userWithPlaces.places.map(place =>
        place.toObject({ getters: true })
      )
    });
};

/**
 * create new place
 * @author phongnv1
 * @readonly please safe read code before edit this method
 */
const createPlace = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    next(new HttpError("Invalid input places, please try again!"));
  }
  const { title, description, address, creator } = req.body;
  let coordinates = "";
  try {
    coordinates = await getCoordsForAddress(address);
  } catch (error) {
    return next(error);
  }

  const createPlace = new Place({
    title,
    description,
    address,
    location: coordinates,
    image: req.file.path,
    creator
  });

  let user;

  try {
    user = await User.findById(creator);
  } catch (err) {
    const error = new HttpError("Creating place failed, please try again", 500);
    return next(error);
  }

  if (!user) {
    const error = new HttpError("Could not find user for provided id.", 404);
    return next(error);
  }

  // DUMMY_PLACES.push(createPlace);
  try {
    const sess = await mongoose.startSession();
    sess.startTransaction();
    await createPlace.save({ session: sess });
    user.places.push(createPlace);
    await user.save({ session: sess });
    await sess.commitTransaction();
  } catch (err) {
    const error = new HttpError("Create place failed, please try again.", 500);
    return next(error);
  }
  res.status(201).json({ place: createPlace });
};

/**
 * update place
 * @author phongnv1
 * @readonly please safe read code before edit this method
 */
const updatePlace = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(new HttpError("Invalid input places, please try again!", 500));
  }
  const placeId = req.params.pid;
  const { title, description, coordinates, address, creator } = req.body;

  let place;
  try {
    place = await Place.findById(placeId);
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, Could not update place. ",
      500
    );
    return next(error);
  }
  if (place.creator.toString() !== req.userData.userId) {
    const error = new HttpError(
      "You are not allowed to edit this place. ",
      401
    );
    return next(error);
  }
  if (!place) {
    return next(new HttpError("Places doesn't exits!"));
  }
  place.title = title;
  place.description = description;
  try {
    await place.save();
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, Could not update place. ",
      500
    );
    return next(error);
  }

  res.status(200).json({ place: place.toObject({ getters: true }) });
};

/**
 * delete place
 * @author phongnv1
 * @readonly please safe read code before edit this method
 */
const deletePlace = async (req, res, next) => {
  const placeId = req.params.pid;
  let place;
  try {
    place = await Place.findById(placeId).populate("creator");
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, Could not delete place. ",
      500
    );
    return next(error);
  }
  if (!place) {
    return next(new HttpError("Place isn't exits", 404));
  }
  if (place.creator.id !== req.userData.userId) {
    const error = new HttpError(
      "You are not allowed to delete this place. ",
      401
    );
    return next(error);
  }
  const imagePath = place.image;
  try {
    const sess = await mongoose.startSession();
    sess.startTransaction();
    await place.remove({ session: sess });
    place.creator.places.pull(place);
    await place.creator.save({ session: sess });
    await sess.commitTransaction();
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, Could not delete place. ",
      500
    );
    return next(error);
  }
  fs.unlink(imagePath, error => {
    console.log(error);
  });
  res.status(200).json({ messsage: "Delete place success!" });
};

exports.getPlacesById = getPlacesById;
exports.getPlaceByUserId = getPlaceByUserId;
exports.createPlace = createPlace;
exports.deletePlace = deletePlace;
exports.updatePlace = updatePlace;
