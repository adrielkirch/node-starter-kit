const mongoose = require("mongoose");
const User = require("../models/User");

async function add(email, name,password) {
  console.log(email," ", name, " ",password)
  const user = { email, name, password };
  const result = await User.create(user);
  return result._id;
}

module.exports = {
  add
};
