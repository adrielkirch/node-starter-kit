const userRepository = require("../repositories/userRepository");
const securityUtil = require("../utils/securityUtil");
async function add(email, name, password) {
  const hashPassword = securityUtil.generateHashWithSalt(password);
  const user = await userRepository.add(email, name, hashPassword);
  return user;
}
async function login(email, password) {
  const hashPassword = securityUtil.generateHashWithSalt(password);
  const user = await userRepository.login(email, hashPassword);
  if (!user) {
    throw new Error("Invalid email or password.");
  }
  const token = securityUtil.generateJsonwebtoken(user._id.toString());
  user.token = token;
  delete user.password;
  return user;
}

async function getById(id) {
  return id;
}

module.exports = {
  add,
  login,
  getById
};
