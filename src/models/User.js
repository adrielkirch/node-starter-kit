const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const roleConstants = require('../constants/roleConstants');
const activeConstants = require('../constants/activeConstants');
const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now 
  },
  updatedAt: {
    type: Date,
    default: null 
  },
  roles: {
    type: String,
    default: roleConstants.ROLE_USER
  },
  active: {
    type: String,
    default: activeConstants.STATUS_ACTIVE
  }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
