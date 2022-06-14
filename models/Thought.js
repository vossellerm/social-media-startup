const { Schema, model } = require("mongoose");
const reactionSchema = require("./Reaction");
const dateFormat = require("../utils/dateFormat");

const thoughtSchema = new Schema();

// thoughtText: string, required, between 1 and 280 characters
// createdAt: Date, default is current timestamp, getter method format timestamp on query
// username: string, required
// reactions: array from reactionSchema
// toJSON

// reactionCount virtual: retrieve lenght of thought's reactions array

const Thought = model("Thought", thoughtSchema);

module.exports = Thought;
