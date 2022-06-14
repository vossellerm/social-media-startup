const { User } = require("../models");
const { Types } = require("mongoose");

const userData = {
  mikayla: {
    username: "mikayla",
    email: "mikayla@email.com",
    friends: ["carson", "jake", "chase", "john"],
  },
  leigh: {
    username: "leigh",
    email: "leigh@email.com",
    friends: ["john"],
  },
  john: {
    username: "john",
    email: "john@email.com",
    friends: ["leigh", "mikayla"],
  },
  carson: {
    username: "carson",
    email: "carson@email.com",
    friends: ["mikayla", "chase", "jake"],
  },
  jake: {
    username: "jake",
    email: "jake@email.com",
    friends: ["mikayla", "chase", "carson"],
  },
  chase: {
    username: "chase",
    email: "chase@email.com",
    friends: ["mikayla", "carson", "jake"],
  },
};

// user id
for (const username in userData) {
  userData[username]._id = Types.ObjectId();
}

// map friend usernames to friend ids
for (const username in userData) {
  const user = userData[username];
  user.friends = user.friends.map((friend) => userData[friend]._id);
}

async function seedUsers() {
  return User.insertMany(Object.values(userData));
}

module.exports = { seedUsers };
