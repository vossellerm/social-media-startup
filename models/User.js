const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    // username: String, unique, required, trimmed
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    // email: string, required, unique, must match valid email address
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, "Must match an email address!"],
    },

    // thoughts: array of _id, reference Thought model
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: "Thought",
      },
    ],

    // friends: array of _id, reference User model
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  // toJSON
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// friendCount virtual: retrieves length of friends array
userSchema.virtual("friendCount").get(function () {
  return this.friends.length;
});

const User = model("User", userSchema);

module.exports = User;
