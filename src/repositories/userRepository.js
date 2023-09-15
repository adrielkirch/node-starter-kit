const mongoose = require("mongoose");
const User = require("../models/User");

async function add(email, name,password) {
 
  const user = { email, name, password };
  const result = await User.create(user);
  return result._id;
}

async function login(email,password) {
  const user = await User.findOne({email:email,password:password});
  return user;
}

module.exports = {
  add,
  login
};
