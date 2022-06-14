const router = require("express").Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require("../../controllers/user-controller");

// GET all users
// GET single user by _id && thought and friend data
// POST new user
// PUT update user by _id
// DELETE remove user by _id

module.exports = router;
