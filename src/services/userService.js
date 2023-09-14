const userRepository = require("../repositories/userRepository");
const User = require("../models/User");
const genericRopository = require("../repositories/genericRepository");
const securityUtil = require("../utils/securityUtil");

async function add(email, name, password) {
  const hashPassword = securityUtil.generateHashWithSalt(password);
  const user = await userRepository.add(email, name, hashPassword);
  return user;
}
async function login(email, password) {
  const hashPassword = securityUtil.generateHashWithSalt(password);
  let user = await userRepository.login(email, hashPassword);
  if (!user) {
    throw new Error("Invalid email or password.");
  }
  const token = securityUtil.generateJsonwebtoken(user._id.toString());
  user.token = token;
  user = securityUtil.sensiviteDataField(user,"password");
  return user;
}

async function getById(id) {
  let user = await genericRopository.getById(User, id);
  if (!user) {
    throw new Error("Invalid id");
  }
  user = user.toObject();
  user = securityUtil.sensiviteDataField(user,"password");
  return user;
}


async function getAll() {
  return await genericRopository.getAll(User);
}


module.exports = {
  add,
  login,
  getById,
  getAll,
};
