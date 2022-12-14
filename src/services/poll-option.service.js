function createPollOptionService({ pollOptionRepository }) {
  async function create(body) {
    return await pollOptionRepository.create(body);
  }

  async function exists({ id, pollId }) {
    return await pollOptionRepository.get().byId(id).byPoll(pollId).exists();
  }

  return { create, exists };
}

module.exports = createPollOptionService;
