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
// GET single thought by _id
// POST create new thought && PUSH to user's thought array
// PUT update thought by _id
// DELETE remove thought by _id
// POST create raction stored in single thought
// DELETE pull and remove reaction by reactionId

module.exports = router;
