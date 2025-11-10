const express = require("express");
const {
  registeruser,
  loginUser,
  getCurrentUser,
} = require("../controller/userController");

const router = express.Router();

console.log("called user route");
router.route("/register").post(registeruser);
router.route("/login").post(loginUser);
router.route("/current").get(getCurrentUser);

module.exports = router;
