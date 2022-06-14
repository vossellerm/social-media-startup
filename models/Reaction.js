const { Schema, Types } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

const reactionSchema = new Schema();
// reactionId: ObjectId data type
// reactionBody: String, required, 280 character max
// username: string, required
// createdAt: date, default current timestamp, getter method to format timestamp
// toJSON

module.exports = reactionSchema;
