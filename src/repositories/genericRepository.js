const mongoose = require("mongoose");

function getAll(Model) {
  return Model.find({});
}

function getById(Model, id) {
  return Model.findById(id);
}
function updateById(Model, id, data) {
    return Model.findByIdAndUpdate(id, data, { new: true });
  }

module.exports = {
  getAll,
  getById,
  updateById
};
