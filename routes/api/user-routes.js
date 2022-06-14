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
// POST new user
router.route("/").get(getUsers).post(createUser);

// GET single user by _id && thought and friend data
// PUT update user by _id
// DELETE remove user by _id
router.route("/:userId").get(getSingleUser).put(updateUser).delete(deleteUser);

// POST add new friend
// DELETE remove a friend
router.route("/:userId/friends/:friendId").post(addFriend).delete(removeFriend);

module.exports = router;
