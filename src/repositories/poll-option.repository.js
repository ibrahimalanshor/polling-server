const {
  utils: { check },
} = require('@ibrahimanshor/my-express');
const { PollOptionExists, PollOptionGet } = require('../helpers/poll-option');

function createPollOptionRepository({ pollOptionModel }) {
  async function create(body) {
    return await pollOptionModel.create(body);
  }

  function get() {
    return new PollOptionExists({ model: pollOptionModel });
  }

  return { create, get };
}

module.exports = createPollOptionRepository;
