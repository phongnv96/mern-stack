const HttpError = require("../models/http-error");
const uuid = require("uuid");
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
  res.json({ place });
};

const getPlaceByUserId = (rep, res, next) => {
  const userId = rep.params.uid;
  const place = DUMMY_PLACES.find(p => {
    return p.creator === userId;
  });
  if (!place) {
    const error = new Error("Could not find a place for the provided id.");
    error.code = 404;
    return next(error);
  }
  res.json(place);
};

const createPlace = (req, res, next) => {
  const { title, description, coordinates, address, creator } = req.body;
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

const deletePlace = (req, res, next) => {
  const placeId = req.params.pid;
  const place = DUMMY_PLACES.find(x => x.id === placeId);
  if (!place) {
    return next(new HttpError("Place isn't exits", 404));
  }
  DUMMY_PLACES = DUMMY_PLACES.filter(x => x !== pid );
  res.status(200).json({messsage: "Delete place success!"});
};

exports.getPlacesById = getPlacesById;
exports.getPlaceByUserId = getPlaceByUserId;
exports.createPlace = createPlace;
exports.deletePlace = deletePlace;
