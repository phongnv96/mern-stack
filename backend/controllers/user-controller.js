const HttpError = require("../models/http-error");
const uuid = require("uuid");
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
  res.json({ user: user });
};

const login = (req, res, next) => {
  const { email, password } = req.body;
  const user = DUMMY_USER.find(
    u => u.email === email && u.password === password
  );
  if (!user) {
    throw new HttpError("User not found!", 500);
  }
  res.json({ message: "Login success!" });
};

const signUp = (req, res, next) => {
  const { email, password } = req.body;
  const user = DUMMY_USER.find(u => u.email === email);
  if (user) {
    throw new HttpError("Email already exits!", 400);
  } else {
    const newUser = {
      id: uuid(),
      email: email,
      password: password
    };
    DUMMY_USER.push(newUser);
  }
  res.json({ message: "Create account succes!" });
};

exports.getUserById = getUserById;
exports.login = login;
exports.signUp = signUp;
