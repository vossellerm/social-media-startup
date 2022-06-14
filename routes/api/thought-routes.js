const router = require("express").Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction,
} = require("../../controllers/thought-controller");

// GET all thoughts
// POST create new thought && PUSH to user's thought array
router.route("/").get(getThoughts).post(createThought);

// GET single thought by _id
// PUT update thought by _id
// DELETE remove thought by _id
router
  .route("/:thoughtId")
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

// POST create raction stored in single thought
router.route("/:thoughtId/reactions").post(addReaction);

// DELETE pull and remove reaction by reactionId
router.route("/:thoughtId/reactions/:reactionId").delete(removeReaction);

module.exports = router;
