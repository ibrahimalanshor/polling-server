const {
  utils: { check },
} = require('@ibrahimanshor/my-express');
const { PollOptionExists } = require('../helpers/poll-option');

function createPollOptionRepository({ pollOptionModel }) {
  async function create(body) {
    return await pollOptionModel.create(body);
  }

  function exists() {
    return new PollOptionExists({ model: pollOptionModel });
  }

  return { create, exists };
}

module.exports = createPollOptionRepository;
