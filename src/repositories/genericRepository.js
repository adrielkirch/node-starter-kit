
async function getAll(Model) {
  try {
    const data = await Model.find({});
    return data;
  } catch (error) {
    throw error;
  }
}

async function getById(Model, id) {
  try {
    const data = await Model.findById(id);
    return data;
  } catch (error) {
    throw error;
  }
}

async function updateById(Model, id, data) {
  try {
    const updatedData = await Model.findByIdAndUpdate(id, data, { new: true });
    return updatedData;
  } catch (error) {
    throw error;
  }
}

async function pagination(Model, pageSize = 16, page = 1) {
  try {
    const limit = parseInt(pageSize);
    const pageNumber = parseInt(page);
    const skip = (pageNumber - 1) * limit;

    const data = await Model.find({})
      .skip(skip)
      .limit(limit);

    const totalCount = await Model.countDocuments({});
    const totalPages = Math.ceil(totalCount / limit);

    return {
      totalPages,
      page: pageNumber,
      payload: data,
    };
  } catch (error) {
    throw error;
  }
}


module.exports = {
  getAll,
  getById,
  updateById,
  pagination
};


