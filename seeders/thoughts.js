const { Thought } = require("../models");

const minuteMs = 60000;
const hourMs = 60 * minuteMs;
const dayMs = 24 * hourMs;
const weekMs = dayMs * 7;

class DateGenerator {
  lastDate = null;

  next(stepMs = 24 * 60 * 60 * 1000) {
    if (!this.lastDate) {
      this.lastDate = Date.now() - weekMs;
    }
    this.lastDate += stepMs;
    if (this.lastDate > Date.now()) {
      throw new Error("Next date must not exceed the current time.");
    }
    return this.lastDate;
  }
}

const dateGen = new DateGenerator();

const thoughtData = [
  {
    username: "mikayla",
    thoughtText: "This is awesome.",
    createdAt: dateGen.next(0),
    reactions: [
      {
        username: "john",
        reactionBody: "Thank you.",
        createdAt: dateGen.next(30 * minuteMs),
      },
    ],
  },
  {
    username: "leigh",
    thoughtText: "I love chocolate!",
    createdAt: dateGen.next(2 * hourMs),
    reactions: [],
  },
  {
    username: "carson",
    thoughtText: "My favorite color is blue.",
    createdAt: dateGen.next(2 * dayMs),
    reactions: [],
  },
  {
    username: "jake",
    thoughtText: "I have two cats.",
    createdAt: dateGen.next(4 * hourMs),
    reactions: [
      {
        username: "carson",
        reactionBody: "I love cats!",
        createdAt: dateGen.next(minuteMs),
      },
    ],
  },
  {
    username: "carson",
    thoughtText: "I ate a sandwich for lunch.",
    createdAt: dateGen.next(2 * dayMs),
    reactions: [],
  },
  {
    username: "chase",
    thoughtText: "I like to go hiking.",
    createdAt: dateGen.next(1 * hourMs),
    reactions: [],
  },
  {
    username: "mikayla",
    thoughtText: "I had a great day today!",
    createdAt: dateGen.next(25 * minuteMs),
    reactions: [
      {
        username: "carson",
        reactionBody: "That is awesome!",
        createdAt: dateGen.next(30 * minuteMs),
      },
      {
        username: "jake",
        reactionBody: "What did you do today?",
        createdAt: dateGen.next(12 * minuteMs),
      },
      {
        username: "chase",
        reactionBody: "I also had a great day!",
        createdAt: dateGen.next(53 * minuteMs),
      },
    ],
  },
];

function seedThoughts() {
  return Thought.insertMany(thoughtData);
}

module.exports = { seedThoughts };
