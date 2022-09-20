const { PollExists, PollGet } = require('../helpers/poll');

function createPollRepository({ pollModel }) {
  async function create(body) {
    return await pollModel.create(body);
  }

  function get() {
    return new PollGet({ model: pollModel });
  }

  function exists() {
    return new PollExists({ model: pollModel });
  }

  return { create, get, exists };
}

module.exports = createPollRepository;
