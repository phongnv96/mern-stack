const HttpError = require("../models/http-error");
const uuid = require("uuid");
const { validationResult } = require("express-validator");
const User = require("../models/user");
const DUMMY_USER = [
  { id: 1, email: "phongnv1", password: "123456" },
  { id: 2, email: "phongnv3", password: "1234567" }
];

const getUserById = (req, res, next) => {
  const userId = req.userId;
  const user = DUMMY_USER.find(u => u.id === userId);
  if (!user) {
    throw new HttpError("User not found!", 400);
  }
  res.status(200).json({ user: user });
};

const login = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    throw new HttpError("Invalid inputs passed, please check your data.", 422);
  }
  const { email, password } = req.body;
  const user = DUMMY_USER.find(
    u => u.email === email && u.password === password
  );
  if (!user) {
    throw new HttpError("User not found!", 500);
  }
  res.status(200).json({ message: "Login success!" });
};

const signUp = async (req, res, next) => {
  const { name, email, password, places } = req.body;
  let existingUser;
  try {
    existingUser = await User.findOne({ email: email });
  } catch (err) {
    const error = new HttpError(
      "Signing up failed, please try again later.",
      500
    );
    return next(error);
  }

  if (existingUser) {
    return next(new HttpError("Email already exits!", 400));
  }
  const newUser = new User({
    name: name,
    email: email,
    password: password,
    image:
      "https://i.pinimg.com/originals/37/09/a8/3709a868328da6e36e50666f1f08b904.jpg",
    places
  });
  try {
    await newUser.save();
  } catch (err) {
    const error = new HttpError("Signing up failed, please try again. ", 500);
    return next(error);
  }

  res.status(200).json({ user: newUser.toObject({ getters: true }) });
};

exports.getUserById = getUserById;
exports.login = login;
exports.signUp = signUp;
