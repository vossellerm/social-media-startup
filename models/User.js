const { Schema, model } = require("mongoose");

const userSchema = new Schema();
// username: String, unique, required, trimmed
// email: string, required, unique, must match valid email address
// thoughts: array of _id, reference Thought model
// friends: array of _id, reference User model

// friendCount virtual: retrieves length of friends array

const User = model("User", userSchema);

module.exports = User;
