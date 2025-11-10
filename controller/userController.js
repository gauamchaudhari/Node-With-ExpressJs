const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

const registeruser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    res.status(400);
    throw new Error("All fields are mandatory");
  }
  const existUSer = await User.findOne({ email });
  if (existUSer) {
    res.status(400);
    throw new Error("User already registered");
  }
  const hasPassword = await bcrypt.hash(password, 10);
  const user = await User.create({
    username,
    email,
    password: hasPassword,
  });
  if (!user) {
    res.status(400);
    throw new Error("User data is not valid");
  }
  res.status(201).json({ message: "User registered successfully", user });
});

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400);
    throw new Error("All fields are mandatory");
  }
  const user = await User.findOne({ email });
  if (!user || !(await bcrypt.compare(password, user.password))) {
    res.status(401);
    throw new Error("Email or password is not valid");
  }
  res.status(200).json({ message: "User logged in successfully" });
});

const getCurrentUser = asyncHandler(async (req, res) => {
  res.status(200).json(req.user);
});

module.exports = {
  registeruser,
  loginUser,
  getCurrentUser,
};
