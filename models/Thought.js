const { Schema, model } = require("mongoose");
const reactionSchema = require("./Reaction");
const dateFormat = require("../utils/dateFormat");

const thoughtSchema = new Schema(
  {
    // thoughtText: string, required, between 1 and 280 characters
    thoughtText: {
      type: String,
      required: "You need to leave a thought!",
      minlength: 1,
      maxlength: 280,
    },

    // createdAt: Date, default is current timestamp, getter method format timestamp on query
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => dateFormat(timestamp),
    },
    // username: string, required
    username: {
      type: String,
      required: true,
    },
    // reactions: array from reactionSchema
    reactions: [reactionSchema],
  },

  // toJSON
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);
// reactionCount virtual: retrieve lenght of thought's reactions array
thoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

const Thought = model("Thought", thoughtSchema);

module.exports = Thought;
