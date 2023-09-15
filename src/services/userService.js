const userRepository = require("../repositories/userRepository");
const User = require("../models/User");
const genericRepository = require("../repositories/genericRepository");
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
  user = user.toObject();
  const token = securityUtil.generateJsonwebtoken(user._id.toString());
  user.token = token;
  user = securityUtil.sensiviteDataField(user, "password");
  return user;
}

async function getById(id) {
  let user = await genericRepository.getById(User, id);
  if (!user) {
    throw new Error("Invalid id");
  }
  user = user.toObject();
  user = securityUtil.sensiviteDataField(user, "password");
  return user;
}

async function getAll() {
  return await genericRepository.getAll(User);
}

async function pagination(pageSize = 16, page = 1) {
  return await genericRepository.pagination(User, pageSize, page);
}

module.exports = {
  add,
  login,
  getById,
  getAll,
  pagination
};
