const HttpError = require("../models/http-error");
const { validationResult } = require("express-validator")
const uuid = require("uuid");
const getCoordsForAddress = require('../util/location');


const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Empire State Building",
    description: "One of the most famous sky scrapers in the world!",
    location: {
      lat: 40.7484474,
      lng: -73.9871516
    },
    address: "20 W 34th St, New York, NY  10001",
    creator: "u1"
  }
];


/**
 * get place by id
 * @author phongnv1
 * @readonly please safe read code before edit this method
 */
const getPlacesById = (rep, res, next) => {
  const placeId = rep.params.pid;
  const place = DUMMY_PLACES.find(p => {
    return p.id === placeId;
  });

  if (!place) {
    return next(
      new HttpError("Could not find a place for the provided id.", 404)
    );
  }
  res.status(200).json({ place });
};


/**
 * get place by userId
 * @author phongnv1
 * @readonly please safe read code before edit this method
 */
const getPlaceByUserId = (rep, res, next) => {
  const userId = rep.params.uid;
  const place = DUMMY_PLACES.find(p => {
    return p.creator === userId;
  });
  if (!place) {
    throw new HttpError("Could not find a place for the provided id.");
  }
  res.status(200).json(place);
};


/**
 * create new place
 * @author phongnv1
 * @readonly please safe read code before edit this method
 */
const createPlace = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    next(new HttpError('Invalid input places, please try again!'));
  }
  const { title, description, coordinates, address, creator } = req.body;
  try {
    coordinates = await getCoordsForAddress(address);
  } catch (error) {
    return next(error);
  }
  const createPlace = {
    id: uuid(),
    title,
    description,
    location: coordinates,
    address,
    creator
  };
  DUMMY_PLACES.push(createPlace);
  res.status(201).json({ place: createPlace });
};


/**
 * update place
 * @author phongnv1
 * @readonly please safe read code before edit this method
 */
const updatePlace = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    throw new HttpError('Invalid input places, please try again!');
  }
  const { id, title, description, coordinates, address, creator } = body.req;
  const updatePlace = DUMMY_PLACES.find(p => p.id === id);
  if (!updatePlace) {
    throw new HttpError("Places doesn't exits!");
  }
  updatePlace.title = title;
  updatePlace.description = description;
  updatePlace.coordinates = coordinates;
  updatePlace.address = address;
  updatePlace.creator = creator;
  res.status(200).json({ messsage: 'update place success!' });
}

/**
 * delete place
 * @author phongnv1
 * @readonly please safe read code before edit this method
 */
const deletePlace = (req, res, next) => {
  const placeId = req.params.pid;
  const place = DUMMY_PLACES.find(x => x.id === placeId);
  if (!place) {
    return next(new HttpError("Place isn't exits", 404));
  }
  DUMMY_PLACES = DUMMY_PLACES.filter(x => x !== pid);
  res.status(200).json({ messsage: "Delete place success!" });
};

exports.getPlacesById = getPlacesById;
exports.getPlaceByUserId = getPlaceByUserId;
exports.createPlace = createPlace;
exports.deletePlace = deletePlace;
exports.updatePlace = updatePlace;
