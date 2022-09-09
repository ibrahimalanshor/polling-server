function createPollAnswerService({ pollAnswerRepository }) {
  async function create(body) {
    return await pollAnswerRepository.create(body);
  }

  return { create };
}

module.exports = createPollAnswerService;
