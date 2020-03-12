const HttpError = require("../models/http-error");
const { validationResult } = require("express-validator");
const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const getUsers = async (req, res, next) => {
  let users;
  try {
    users = await User.find({}, "-password");
  } catch (err) {
    const error = new HttpError(
      "Fetching users failed, please try again later.",
      500
    );
    return next(error);
  }
  res.json({ users: users.map(user => user.toObject({ getters: true })) });
};

const getUserById = (req, res, next) => {
  const userId = req.userId;
  const user = DUMMY_USER.find(u => u.id === userId);
  if (!user) {
    throw new HttpError("User not found!", 400);
  }
  res.status(200).json({ user: user });
};

const login = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    throw new HttpError("Invalid inputs passed, please check your data.", 422);
  }
  const { email, password } = req.body;
  let user;
  try {
    user = await User.findOne({ email: email });
  } catch (err) {
    const error = new HttpError("Something worrong, please try again!", 500);
    return next(error);
  }
  if (!user) {
    return next(new HttpError("User not found!", 500));
  }
  let isValidPassword = false;
  try {
    isValidPassword = await bcrypt.compare(password, user.password);
  } catch (err) {
    const error = new HttpError(
      "Could not log you in, please check your credentials and try again.",
      500
    );
    return next(error);
  }
  let token;
  try {
    token = jwt.sign(
      { userId: user.id, email: user.email },
      process.env.JWT_KEY,
      {
        expiresIn: "1h"
      }
    );
  } catch (err) {
    const error = new HttpError("Login failed, please try again later.", 500);
    return next(error);
  }

  res.status(200).json({
    message: "Login success!",
    user: user.toObject({ getters: true }),
    token: token
  });
};

const signUp = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(
      new HttpError("Invalid inputs passed, please check your data.", 422)
    );
  }
  const { name, email, password } = req.body;
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

  let hashedPassword;
  try {
    hashedPassword = await bcrypt.hash(password, 12);
  } catch (err) {
    const error = new HttpError(
      "Could not create user, please try again.",
      500
    );
    return next(error);
  }
  const newUser = new User({
    name: name,
    email: email,
    password: hashedPassword,
    image: req.file.path,
    places: []
  });
  try {
    await newUser.save();
  } catch (err) {
    const error = new HttpError("Signing up failed, please try again. ", 500);
    return next(error);
  }

  let token;
  try {
    token = jwt.sign(
      { userId: newUser.id, email: newUser.email },
      process.env.JWT_KEY,
      {
        expiresIn: "1h"
      }
    );
  } catch (err) {
    const error = new HttpError("Login failed, please try again later.", 500);
    return next(error);
  }

  res.status(200).json({ user: newUser.toObject({ getters: true }), token: token });
};

exports.getUserById = getUserById;
exports.login = login;
exports.signUp = signUp;
exports.getUsers = getUsers;
