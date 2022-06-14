const { Schema, Types } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

const reactionSchema = new Schema(
  {
    // reactionId: ObjectId data type
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },

    // reactionBody: String, required, 280 character max
    reactionBody: {
      type: String,
      required: true,
      maxlength: 280,
    },

    // username: string, required
    username: {
      type: String,
      required: true,
    },

    // createdAt: date, default current timestamp, getter method to format timestamp
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => dateFormat(timestamp),
    },
  },
  // toJSON
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

module.exports = reactionSchema;
