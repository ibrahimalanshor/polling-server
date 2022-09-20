function createPollOptionService({ pollOptionRepository }) {
  async function createMany(options) {
    return await pollOptionRepository.createMany(options);
  }

  async function exists({ id, pollId }) {
    return await pollOptionRepository.exists().byId(id).byPoll(pollId).exists();
  }

  return { createMany, exists };
}

module.exports = createPollOptionService;
