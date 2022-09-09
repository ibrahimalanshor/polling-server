const {
  utils: { check },
} = require('@ibrahimanshor/my-express');

function createPollOptionRepository({ pollOptionModel }) {
  async function createMany(options) {
    return await pollOptionModel.create(options);
  }

  async function exists(filter) {
    return pollOptionModel.exists(filter);
  }

  async function find(id) {
    const pollOption = await pollOptionModel.findById(id);

    check.isNotFound(pollOption === null);

    return pollOption;
  }

  return { createMany, exists, find };
}

module.exports = createPollOptionRepository;
