const {
  utils: { check },
} = require('@ibrahimanshor/my-express');
const { PollOptionExists } = require('../helpers/poll-option');

function createPollOptionRepository({ pollOptionModel }) {
  async function createMany(options) {
    return await pollOptionModel.create(options);
  }

  function exists() {
    return new PollOptionExists({ model: pollOptionModel });
  }

  async function find(id) {
    const pollOption = await pollOptionModel.findById(id);

    check.isNotFound(pollOption === null);

    return pollOption;
  }

  return { createMany, exists, find };
}

module.exports = createPollOptionRepository;
