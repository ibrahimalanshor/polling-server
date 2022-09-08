const {
  utils: { check },
} = require('@ibrahimanshor/my-express');

function createPollingRepository({ pollingModel }) {
  async function create(body) {
    return await pollingModel.create(body);
  }

  async function find(id) {
    const polling = await pollingModel.findById(id).populate('options');

    check.isNotFound(polling === null);

    return polling;
  }

  async function pushOptions(polling, options) {
    return await polling.updateOne({
      $push: {
        options: { $each: options },
      },
    });
  }

  async function exists(filter) {
    return pollingModel.exists(filter);
  }

  return { create, find, pushOptions, exists };
}

module.exports = createPollingRepository;
