const { PollGet } = require('../helpers/poll');

function createPollRepository({ pollModel }) {
  async function create(body) {
    return await pollModel.create(body);
  }

  function get() {
    return new PollGet({ model: pollModel });
  }

  return { create, get };
}

module.exports = createPollRepository;
