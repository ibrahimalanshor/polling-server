function createPollAnswerRepository({ pollAnswerModel }) {
  async function create(body) {
    return await pollAnswerModel.create(body);
  }

  return { create };
}

module.exports = createPollAnswerRepository;
