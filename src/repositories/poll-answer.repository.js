const { PollAnswerGet } = require('../helpers/poll-answer');

function createPollAnswerRepository({ pollAnswerModel }) {
  async function create(body) {
    return await pollAnswerModel.create(body);
  }

  function get() {
    return new PollAnswerGet({ model: pollAnswerModel });
  }

  return { create, get };
}

module.exports = createPollAnswerRepository;
