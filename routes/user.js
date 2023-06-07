const express = require("express");
const {
  getAllUsers,
  register,
  getMyProfile,
  login,
  logout,
} = require("../controllers/user.js");
const { isAuthenticated } = require("../middlewares/auth.js");

const router = express.Router();

router.post("/new", register);
router.post("/login", login);

router.get("/logout", logout);

router.get("/me", isAuthenticated, getMyProfile);

module.exports = router;
