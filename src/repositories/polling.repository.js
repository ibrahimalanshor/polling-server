const {
  utils: { check },
} = require('@ibrahimanshor/my-express');

function createPollingRepository({ pollingModel }) {
  async function create(body) {
    return await pollingModel.create(body);
  }

  async function find(id) {
    const polling = await pollingModel.findById(id).populate({
      path: 'options',
      populate: 'countAnswers',
    });

    check.isNotFound(polling === null);

    return polling;
  }

  async function exists(filter) {
    return pollingModel.exists(filter);
  }

  return { create, find, exists };
}

module.exports = createPollingRepository;
