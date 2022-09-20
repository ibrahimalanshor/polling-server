const { PollAnswerExists } = require('../helpers/poll-answer');

function createPollAnswerRepository({ pollAnswerModel }) {
  async function create(body) {
    return await pollAnswerModel.create(body);
  }

  function exists() {
    return new PollAnswerExists({ model: pollAnswerModel });
  }

  return { create, exists };
}

module.exports = createPollAnswerRepository;
